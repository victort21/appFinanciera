import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { pattern } from '../../interfaces/validator';

@Component({
  selector: 'app-cliente-nuevo',
  templateUrl: './cliente-nuevo.component.html'
})
export class ClienteNuevoComponent implements OnInit{

  label: string = '';
  opcConyugue: boolean = false;

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

  clienteForm = this.fb.group({
    identificacion: ['', [Validators.required] ],
    carnetOcedula: ['', [Validators.required, Validators.pattern(pattern.numeros)  ] ],
    nombres: ['', [Validators.required, Validators.pattern(pattern.nombres) ]  ],
    primerApellido: ['', [Validators.required, Validators.pattern(pattern.letras) ] ],
    segundoApellido: ['', [Validators.required, Validators.pattern(pattern.letras) ] ],
    genero: ['M', [Validators.required] ],
    fechaNac: ['', [Validators.required] ],
    estadoCivil: ['', [Validators.required] ],
    nombreConyugue: ['', [ Validators.pattern(pattern.letras) ] ],
    DNI: ['', [Validators.pattern(pattern.numeros) ]],
    lugarTrabajo: ['', Validators.pattern(pattern.letras)],
    residencia: ['', [Validators.required] ],
    dependientes: ['', [Validators.required, Validators.pattern(pattern.numeros)] ],
    municipio: [''],
    colonia: ['', [Validators.required] ],
    calle: ['', [Validators.required] ],
    casa: ['', [Validators.required, Validators.pattern(pattern.noDecimales)] ],
    referencia: ['', [Validators.required] ],
    tiempoResidir: ['', [Validators.required]],
    numeroCelular1: ['', [Validators.required]],
    numeroCelular2: ['', [Validators.required]],
    telefonoFijo: ['', [Validators.required]],
    correo: ['', []],
  });

  campoObligatorio(campo: string) {
    return this.clienteForm.get(campo)?.errors && this.clienteForm.get(campo)?.touched 
  }

  get errorCarnetCedula(): string {
    if(this.clienteForm.controls.carnetOcedula.errors?.['pattern']) {
      return 'No se permiten letras'
    }
    return '';
  }

  get errorNombres():string {
    if(this.clienteForm.controls.nombres.errors?.['pattern']) {
      return 'Se esperaba en formato de Nombre y apellido'
    }
    return '';
  }

  soloNumeros(campo: string) {
    return this.clienteForm.get(campo)?.errors?.['pattern']
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

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {}
  ngOnInit(): void {
    
  }

  get mostrarOpcConyugue():boolean {
    if(this.clienteForm.controls.estadoCivil.value == 'casado' || this.clienteForm.controls.estadoCivil.value == 'conviviente') {
      return true;
    }
    
    return false;
  }

  agregarCliente() {
    if(this.clienteForm.invalid) {
      this.clienteForm.markAllAsTouched();
      this._snackBar.open('Los campos en rojos son obligatorios', 'Cerrar', {
        duration: 3000,
      });
      Object.values(this.clienteForm.controls).forEach(control => {
        if(control.errors?.['required']) {
          control.markAsTouched();
        }
      });

      return;
    };

    console.log(this.clienteForm.value);
  }

  cambiarLabel(e: any) {
    this.label = e.target.value;
  }

}
