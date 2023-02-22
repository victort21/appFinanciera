import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styles: [`
    input[type=checkbox]:checked {
      background-color: red;
    }
  `]
})
export class LoginComponent implements OnInit {
  mostrarContra: boolean = false;

  authForm = this.fb.group({
    usuario: ['', [Validators.required, Validators.minLength(7)] ],
    password: ['', [Validators.required] ],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit():void {

    this.authForm.controls.usuario.setValue('victort21');
    this.authForm.controls.password.setValue('password');
  }

  get errorName():string {
    if(this.authForm.controls?.usuario.errors?.['required'] && this.authForm.controls?.usuario.touched) {
      return 'El usuario es obligatorio'
    }else if (this.authForm.controls?.usuario.errors?.['minlength']) {
      return 'El usuario debe contener mas de 6 letras';
    }else{
      return '';
    }
  }

  get errorContra():string {
    if(this.authForm.controls?.password.errors?.['required'] && this.authForm.controls?.password.touched) {
      return 'La contraseña es obligatoria'
    }else{
      return '';
    }
  }

  mostarPass() {
    this.mostrarContra = !this.mostrarContra;
  }

  login() {
    if(this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      return;
    }

    localStorage.setItem('token', '123456789');
    this.router.navigateByUrl('/clientes/listado');

    console.log(this.authForm.value);
  }

}
