import { Component } from '@angular/core';
import { ClienteService } from 'src/app/clientes/services/cliente.service';

@Component({
  selector: 'app-datos-cliente',
  templateUrl: './datos-cliente.component.html'
})
export class DatosClienteComponent {

  constructor(public clienteService: ClienteService) {}

}
