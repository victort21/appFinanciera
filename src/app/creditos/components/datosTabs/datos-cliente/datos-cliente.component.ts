import { Component, Input } from '@angular/core';
import { ClienteService } from 'src/app/clientes/services/cliente.service';

@Component({
  selector: 'app-datos-cliente',
  templateUrl: './datos-cliente.component.html'
})
export class DatosClienteComponent {
  @Input() cliente: any

  constructor (public clienteService: ClienteService) {}
}
