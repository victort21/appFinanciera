import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { pattern } from '../../interfaces/validator';
import { ValidatorService } from '../../services/validator.service';
import { ClienteNuevoComponent } from '../cliente-nuevo/cliente-nuevo.component';


@Component({
  selector: 'app-aval',
  templateUrl: './aval.component.html'
})
export class AvalComponent {

  opcional: boolean = true;

  estadoCivil = [
    {
      value: 'soltero',
      texto: 'Soltero(a)'
    },
    {
      value: 'casado',
      texto: 'Casado(a)'
    },
    {
      value: 'viudo',
      texto: 'Viudo(a)'
    },
    {
      value: 'divorciado',
      texto: 'Divorciado(a)'
    },
    {
      value: 'separado',
      texto: 'Separado(a)'
    },
    {
      value: 'conviviente',
      texto: 'Conviviente'
    },
  ]

  avalForm = this.fb.group({
    nombres: ['', [Validators.required, Validators.pattern(pattern.nombres)]  ],
    primerApellido: ['',  [ Validators.required, Validators.pattern(pattern.letrasSpaces)]  ],
    segundoApellido: ['', [ Validators.required, Validators.pattern(pattern.letrasSpaces)]],
    cedula: ['', [Validators.required, Validators.pattern(pattern.noDecimales)] ],
    municipio: ['', [ Validators.required] ],
    colonia: ['', [ Validators.required ] ],
    calle: ['', [ Validators.required ] ],
    casa: ['', [ Validators.required, Validators.pattern(pattern.noDecimales) ] ],
    referencia: ['', Validators.required],
    celular: ['', [Validators.required, Validators.pattern(pattern.noDecimales) ] ],
    telefonoFijo: ['', [Validators.required, Validators.pattern(pattern.noDecimales) ] ],
    fechaNac: ['', [ Validators.required ] ],
    genero: ['M', [ Validators.required ] ],
    estadoCivil: ['', Validators.required]
  });
  
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,
              public validator: ValidatorService) {}

  get isOpcional() {
    if(this.opcional) {
      return 'SI'
    }else {
      return 'NO'
    }
  }

  avalOpc() {
    this.opcional = !this.opcional
  }

  agregarCliente() {
    if(this.avalForm.invalid) {
      this.avalForm.markAllAsTouched();
      this._snackBar.open('Los campos en rojos son obligatorios', 'Cerrar', {
        duration: 3000,
      });
      Object.values(this.avalForm.controls).forEach(control => {
        control.markAsTouched();
      });

      return;
    };

    console.log(this.avalForm.value);
    // console.log(ClienteNuevoComponent);
  }
}
