import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { pattern } from '../../interfaces/validator';
import { ClienteService } from '../../services/cliente.service';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-garantias',
  templateUrl: './garantias.component.html'
})
export class GarantiasComponent {

  images: string[] = [];

  garantiaForm = this.fb.group({
    nombreArticulo: ['', [ Validators.required ] ],
    precioArticulo: ['', [ Validators.required, Validators.pattern(pattern.numeros) ] ],
  });

  constructor(private fb: FormBuilder, public vs: ValidatorService,
              public clienteService: ClienteService) {}

  foto(e: any) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = e => {
      this.images.push(e.target?.result as string);
    }
    reader.readAsDataURL(file);
  }

  borrar(i: number) {
    this.images.splice(i, 1);
  }
}
