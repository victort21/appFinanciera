import { Component, Input } from '@angular/core';
import { ClienteService } from 'src/app/clientes/services/cliente.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent {

  @Input() cliente: any

  constructor(public clienteService: ClienteService) {}

}
