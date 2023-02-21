import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { pattern } from '../../interfaces/validator';
import { ClienteService } from '../../services/cliente.service';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html'
})
export class CreditoComponent {

  creditoForm = this.fb.group({
    producto: ['', [ Validators.required ] ],
    periodicidad: ['', [ Validators.required ] ],
    monto: ['', [ Validators.required, Validators.pattern(pattern.numeros) ] ],
    plazo: ['', [ Validators.required, Validators.pattern(pattern.numeros) ] ],
    numeroCuotas: [{value: 2 * 4, disabled: true}, [ Validators.required ] ],
  });


  constructor(private fb: FormBuilder, public vs: ValidatorService,
              public clienteService: ClienteService) {
                
              }

}
