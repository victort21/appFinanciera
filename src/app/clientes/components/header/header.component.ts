import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private clienteService: ClienteService) {}

  guardarCliente() {
    this.clienteService.guardarCliente();
  }

}
