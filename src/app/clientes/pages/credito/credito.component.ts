import { Component } from '@angular/core';

import { ClienteService } from '../../services/cliente.service';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html'
})
export class CreditoComponent {


  constructor(public vs: ValidatorService,
              public clienteService: ClienteService) {}

  calcNumCuotas(e: any) {
    const cuotas = Number(e.target.value) * 4;
    this.clienteService.formularioCliente.controls.numeroCuotas.setValue(cuotas);
  }

}
