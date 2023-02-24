import { Component } from '@angular/core';
import { ClienteService } from 'src/app/clientes/services/cliente.service';

@Component({
  selector: 'app-garante',
  templateUrl: './garante.component.html'
})
export class GaranteComponent {

  constructor(public clienteService: ClienteService) {}

}
