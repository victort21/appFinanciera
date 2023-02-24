import { Component } from '@angular/core';
import { ClienteService } from 'src/app/clientes/services/cliente.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styles: [`
    mat-tab-group {
      max-width: 700px;
      margin: 10px auto;
    }
  `]
})
export class TabsComponent {

  constructor(public clienteService: ClienteService) {}

}
