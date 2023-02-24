import { Component, Input } from '@angular/core';
import { ClienteService } from 'src/app/clientes/services/cliente.service';

@Component({
  selector: 'app-datos-credito',
  templateUrl: './datos-credito.component.html'
})
export class DatosCreditoComponent {
  @Input() cliente: any

  constructor (public clienteService: ClienteService) {}
}
