import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { pattern } from '../interfaces/validator';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // formularioCliente = this.fb.group({
  //   producto: ['', [ Validators.required ] ],
  //   periodicidad: ['', [ Validators.required ] ],
  //   monto: ['', [ Validators.required, Validators.pattern(pattern.numeros) ] ],
  //   plazo: ['', [ Validators.required, Validators.pattern(pattern.numeros) ] ],
  //   numeroCuotas: [{value: 2 * 4, disabled: true}, [ Validators.required ] ],
  // });

  constructor(private fb: FormBuilder) { }
}
