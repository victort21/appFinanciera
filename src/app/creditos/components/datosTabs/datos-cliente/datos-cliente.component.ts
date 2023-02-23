import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datos-cliente',
  templateUrl: './datos-cliente.component.html'
})
export class DatosClienteComponent {
  @Input() cliente: any
}
