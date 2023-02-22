import { Component } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';


@Component({
  selector: 'app-calculo-cuota',
  templateUrl: './calculo-cuota.component.html'
})
export class CalculoCuotaComponent {

  mapping = {
    '=1': ' Mes',
    'other': ' Meses'
  }

  constructor(public clienteService: ClienteService) {}

}
