import { Component } from '@angular/core';
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
      return 'SI'
    }else {
      return 'NO'
    }
  }

  avalOpc() {
    this.opcional = !this.opcional
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
