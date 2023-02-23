import { Component, Input } from '@angular/core';
import { ClienteService } from '../../../../clientes/services/cliente.service';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html'
})
export class ConfirmacionComponent {
  @Input() cliente: any

  constructor(public clienteService: ClienteService) {}
}
