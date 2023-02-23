import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datos-credito',
  templateUrl: './datos-credito.component.html'
})
export class DatosCreditoComponent {
  @Input() cliente: any
}
