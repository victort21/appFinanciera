import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-nuevo-credito',
  templateUrl: './nuevo-credito.component.html'
})
export class NuevoCreditoComponent {

  constructor(public clienteService: ClienteService) {}

}
