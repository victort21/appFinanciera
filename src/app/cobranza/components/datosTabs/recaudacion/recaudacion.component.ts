import { Component } from '@angular/core';
import { ClienteService } from 'src/app/clientes/services/cliente.service';

@Component({
  selector: 'app-recaudacion',
  templateUrl: './recaudacion.component.html'
})
export class RecaudacionComponent {

  constructor(public clienteService: ClienteService) {}

}
