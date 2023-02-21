import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ClienteService } from '../../services/cliente.service';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-documentacion',
  templateUrl: './documentacion.component.html'
})
export class DocumentacionComponent {


  constructor(private fb: FormBuilder, public vs: ValidatorService,
              public clienteService: ClienteService) {}
}
