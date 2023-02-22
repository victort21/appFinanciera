import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { pattern } from '../../interfaces/validator';
import { ClienteService } from '../../services/cliente.service';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-cliente-nuevo',
  templateUrl: './cliente-nuevo.component.html'
})
export class ClienteNuevoComponent implements OnInit{

  label: string = '';
  opcConyugue: boolean = false;
  formularioClienteService = this.clienteService.formularioCliente;

  estadoCivil = [
    {
      value: 'soltero',
      texto: 'Soltero(a)'
    },
    {
      value: 'casado',
      texto: 'Casado(a)'
    },
    {
      value: 'viudo',
      texto: 'Viudo(a)'
    },
    {
      value: 'divorciado',
      texto: 'Divorciado(a)'
    },
    {
      value: 'separado',
      texto: 'Separado(a)'
    },
    {
      value: 'conviviente',
      texto: 'Conviviente'
    },
  ]

  get errorCarnetCedula(): string {
    if(this.formularioClienteService.controls.carnetOcedula.errors?.['pattern']) {
      return 'No se permiten letras'
    }
    return '';
  }

  get errorNombres():string {
    if(this.formularioClienteService.controls.nombres.errors?.['pattern']) {
      return 'Se esperaba en formato de Nombre y apellido'
    }
    return '';
  }

  soloNumeros(campo: string) {
    return this.formularioClienteService.get(campo)?.errors?.['pattern']
  }
   

  get placeholder(): string {
    if(this.label === 'carnet') {
      return 'Ingrese el carnet de residencia';
    }else if( this.label === 'cedula' ) {
      return 'Ingrese el numero de cedula';
    }else {
      return 'Documento de identificacion';
    }
  }
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,
              public clienteService: ClienteService, public validator: ValidatorService) {}
  ngOnInit(): void {
    // this.formularioClienteService.controls.identificacion.setValue('cedula');
    // this.formularioClienteService.controls.carnetOcedula.setValue('0512200201594');
    this.formularioClienteService.controls.nombres.setValue('Victor Miguel');
    this.formularioClienteService.controls.primerApellido.setValue('Torres');
    this.formularioClienteService.controls.segundoApellido.setValue('Quintanilla');
    this.formularioClienteService.controls.fechaNac.setValue('2002-06-02');
    this.formularioClienteService.controls.estadoCivil.setValue('soltero');
    this.formularioClienteService.controls.residencia.setValue('familiar');
    this.formularioClienteService.controls.dependientes.setValue('5');
    this.formularioClienteService.controls.colonia.setValue('colonia cliente');
    this.formularioClienteService.controls.calle.setValue('calle cliente');
    this.formularioClienteService.controls.tiempoResidir.setValue('200');
    this.formularioClienteService.controls.residencia.setValue('200');
    this.formularioClienteService.controls.casa.setValue('21');
    this.formularioClienteService.controls.referencia.setValue('referencia domicilio cliente');
    this.formularioClienteService.controls.numeroCelular1.setValue('99152520');
    this.formularioClienteService.controls.numeroCelular2.setValue('99152520');
    this.formularioClienteService.controls.telefonoFijo.setValue('25542121');
    this.formularioClienteService.controls.correo.setValue('victor@correo.com');

    this.formularioClienteService.controls.avalNombres.setValue('Roxana Micaela');
    this.formularioClienteService.controls.avalPrimerApellido.setValue('Hernandez');
    this.formularioClienteService.controls.avalSegundoApellido.setValue('Martinez');
    this.formularioClienteService.controls.avalCedula.setValue('051220011478');
    this.formularioClienteService.controls.avalMunicipio.setValue('aval municipio');
    this.formularioClienteService.controls.avalColonia.setValue('aval colonia');
    this.formularioClienteService.controls.avalCalle.setValue('aval calle');
    this.formularioClienteService.controls.avalCasa.setValue('21');
    this.formularioClienteService.controls.avalCasa.setValue('aval casa');
    this.formularioClienteService.controls.avalReferencia.setValue('referencia aval domicilio');
    this.formularioClienteService.controls.avalCelular.setValue('99152520');
    this.formularioClienteService.controls.avalTelefonoFijo.setValue('2541254');

    this.formularioClienteService.controls.nombreArticulo.setValue('Celular');
    this.formularioClienteService.controls.precioArticulo.setValue('12000');
    this.formularioClienteService.controls.tipoDocumentacion.setValue('servicios_basicos');

    this.formularioClienteService.controls.producto.setValue('microfondo');
    this.formularioClienteService.controls.periodicidad.setValue('semanal');
    this.formularioClienteService.controls.monto.setValue('10000');
    this.formularioClienteService.controls.plazo.setValue('5');
    // this.formularioClienteService.controls.numeroCuotas.setValue(0);
  }

  get mostrarOpcConyugue():boolean {
    if(this.formularioClienteService.controls.estadoCivil.value == 'casado' || this.formularioClienteService.controls.estadoCivil.value == 'conviviente') {
      return true;
    }
    
    return false;
  }

  validarForm() {
    const formValues = this.clienteService.formularioCliente.controls;
    const validation = !formValues.carnetOcedula.value || !formValues.nombres.value || !formValues.primerApellido.value ||
      !formValues.segundoApellido.value || !formValues.fechaNac.value || 
      !formValues.estadoCivil.value || !formValues.residencia.value || !formValues.dependientes.value ||
      !formValues.colonia.value || !formValues.calle.value || !formValues.tiempoResidir.value || 
      !formValues.casa.value || !formValues.referencia.value || !formValues.numeroCelular1.value ||
      !formValues.telefonoFijo.value

    if(validation) {
      formValues.carnetOcedula.markAsTouched();
      formValues.nombres.markAsTouched();
      formValues.primerApellido.markAsTouched();
      formValues.segundoApellido.markAsTouched();
      formValues.fechaNac.markAsTouched();
      formValues.estadoCivil.markAsTouched();
      formValues.residencia.markAsTouched();
      formValues.dependientes.markAsTouched();
      formValues.colonia.markAsTouched();
      formValues.calle.markAsTouched();
      formValues.tiempoResidir.markAsTouched();
      formValues.casa.markAsTouched();
      formValues.referencia.markAsTouched();
      formValues.numeroCelular1.markAsTouched();
      formValues.telefonoFijo.markAsTouched();

      this._snackBar.open('Los campos en rojos son obligatorios', 'Cerrar', {
        duration: 3000,
      });
      return;
    }

    this.clienteService.selectTab(1);
  }

  agregarCliente() {
    // if(this.clienteForm.invalid) {
    //   this.clienteForm.markAllAsTouched();
    //   this._snackBar.open('Los campos en rojos son obligatorios', 'Cerrar', {
    //     duration: 3000,
    //   });
    //   Object.values(this.clienteForm.controls).forEach(control => {
    //     if(control.errors?.['required']) {
    //       control.markAsTouched();
    //     }
    //   });

    //   return;
    // };

    console.log(this.formularioClienteService.value);
  }

  cambiarLabel(e: any) {
    this.label = e.target.value;
  }

}
