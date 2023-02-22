import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ClienteService } from '../../../services/cliente.service';
import { ValidatorService } from '../../../services/validator.service';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html'
})
export class CreditoComponent {


  constructor(public vs: ValidatorService,
              public clienteService: ClienteService, private _snackBar: MatSnackBar) {}

  calcNumCuotas(e: any) {
    const cuotas = Number(e.target.value) * 4;
    this.clienteService.formularioCliente.controls.numeroCuotas.setValue(cuotas);
  }

  validarForm() {
    const formValues = this.clienteService.formularioCliente.controls;
    const validation = !formValues.producto.value || !formValues.periodicidad.value || !formValues.monto.value || !formValues.plazo.value;

    if(validation) {
      formValues.producto.markAllAsTouched();
      formValues.periodicidad.markAllAsTouched();
      formValues.monto.markAllAsTouched();
      formValues.plazo.markAllAsTouched();

      this._snackBar.open('Los campos en rojos son obligatorios', 'Cerrar', {
        duration: 3000,
      });
      return;
    }

    this.clienteService.selectTab(5);
  }

}
