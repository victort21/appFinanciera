import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  errorNombres(avalForm: FormGroup) {
    return avalForm.controls?.['nombres']?.errors?.['pattern']
  }

  validarPattern(avalForm: FormGroup, campo: string) {
    return avalForm.get(campo)?.errors?.['pattern']
  }

  campoObligatorio(campo: string, avalForm: FormGroup) {
    return avalForm.get(campo)?.errors && avalForm.get(campo)?.touched 
  }

}
