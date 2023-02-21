import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ClienteService } from '../../services/cliente.service';
import { ValidatorService } from '../../services/validator.service';


@Component({
  selector: 'app-aval',
  templateUrl: './aval.component.html'
})
export class AvalComponent {

  opcional: boolean = true;

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
  
  constructor(private _snackBar: MatSnackBar,
              public validator: ValidatorService, public clienteService: ClienteService) {}

  get isOpcional() {
    if(this.opcional) {
      return 'NO'
    }else {
      return 'SI'
    }
  }

  avalOpc() {
    this.opcional = !this.opcional
    const inputCheck = this.clienteService.formularioCliente;

    if(!this.opcional) {
      inputCheck.get('avalNombres')?.disable();
      inputCheck.get('avalPrimerApellido')?.disable();
      inputCheck.get('avalSegundoApellido')?.disable();
      inputCheck.get('avalCedula')?.disable();
      inputCheck.get('avalMunicipio')?.disable();
      inputCheck.get('avalColonia')?.disable();
      inputCheck.get('avalCalle')?.disable();
      inputCheck.get('avalCasa')?.disable();
      inputCheck.get('avalReferencia')?.disable();
      inputCheck.get('avalCelular')?.disable();
      inputCheck.get('avalTelefonoFijo')?.disable();
      inputCheck.get('avalFechaNac')?.disable();
      inputCheck.get('avalGenero')?.disable();
      inputCheck.get('avalEstadoCivil')?.disable();
    }else {
      inputCheck.get('avalNombres')?.enable();
      inputCheck.get('avalPrimerApellido')?.enable();
      inputCheck.get('avalSegundoApellido')?.enable();
      inputCheck.get('avalCedula')?.enable();
      inputCheck.get('avalMunicipio')?.enable();
      inputCheck.get('avalColonia')?.enable();
      inputCheck.get('avalCalle')?.enable();
      inputCheck.get('avalCasa')?.enable();
      inputCheck.get('avalReferencia')?.enable();
      inputCheck.get('avalCelular')?.enable();
      inputCheck.get('avalTelefonoFijo')?.enable();
      inputCheck.get('avalFechaNac')?.enable();
      inputCheck.get('avalGenero')?.enable();
      inputCheck.get('avalEstadoCivil')?.enable();
    }
  }

  agregarCliente() {
    const formulario = this.clienteService.formularioCliente;

    // if(formulario.invalid) {
    //   formulario.markAllAsTouched();
    //   this._snackBar.open('Los campos en rojos son obligatorios', 'Cerrar', {
    //     duration: 3000,
    //   });
    //   Object.values(formulario.controls).forEach(control => {
    //     control.markAsTouched();
    //   });

    //   return;
    // };

    console.log(formulario.value);
    // console.log(ClienteNuevoComponent);
  }
}
