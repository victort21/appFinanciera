import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClienteService } from 'src/app/clientes/services/cliente.service';
import { ValidatorService } from 'src/app/clientes/services/validator.service';

@Component({
  selector: 'app-re-prestamo',
  templateUrl: './re-prestamo.component.html'
})
export class RePrestamoComponent {

  images:string[] = []

  constructor(public clienteService: ClienteService, public vs: ValidatorService,
              private _snackBar: MatSnackBar) {}

  calcularCuota(e: any) {
    const formValues = this.clienteService.rePrestamo.controls
    const plazo = Number(e.target.value) * 4;
    formValues.numeroCuotas.setValue(plazo.toString());
  }

  verFormValues() {
    if(this.images.length === 0) {
      this._snackBar.open('Agrega al menos una foto de la garantia', 'Ok', {
        duration: 3000,
      });
      return;
    }
    this.images = [];

    console.log(this.clienteService.rePrestamo.getRawValue());
  }

  foto(e: any) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = e => {
      this.images.push(e.target?.result as string);
      this.clienteService.rePrestamo.controls.imagenes.setValue(this.images);
    }
    reader.readAsDataURL(file);
  }

  borrar(i: number) {
    this.images.splice(i, 1);
  }

}
