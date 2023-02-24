import { Component, Input } from '@angular/core';
import { ClienteService } from 'src/app/clientes/services/cliente.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html'
})
export class GaleriaComponent {
  @Input() cliente: any

  constructor (public clienteService: ClienteService) {}
}
