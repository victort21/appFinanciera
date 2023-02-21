import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { pattern } from '../../interfaces/validator';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-documentacion',
  templateUrl: './documentacion.component.html'
})
export class DocumentacionComponent {

  documentacionForm = this.fb.group({
    tipoDocumentacion: ['', [ Validators.required ] ],
  });

  constructor(private fb: FormBuilder, public vs: ValidatorService) {}
}
