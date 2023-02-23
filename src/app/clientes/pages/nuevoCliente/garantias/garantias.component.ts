import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Lista } from '../../../interfaces';
import { ClienteService } from '../../../services/cliente.service';
import { ValidatorService } from '../../../services/validator.service';


@Component({
  selector: 'app-garantias',
  templateUrl: './garantias.component.html'
})
export class GarantiasComponent {

  images: string[] = [];
  lista: Lista[] = [];


  constructor(public vs: ValidatorService, public clienteService: ClienteService,
              private _snackBar: MatSnackBar) {}

  agregarALista() {
    const formValues = this.clienteService.formularioCliente;

    if(!formValues.value.nombreArticulo || !formValues.value.precioArticulo) {
      this._snackBar.open('Completa los campos para agregar una garantia', 'Ok', {
        duration: 3000,
      });
      return;
    }

    if(this.images.length === 0) {
      this._snackBar.open('Agrega al menos una foto de la garantia', 'Ok', {
        duration: 3000,
      });
      return;
    }

    this.lista.push({
      articulo: formValues.value.nombreArticulo,
      valor: formValues.value.precioArticulo,
      imagenes: this.images,
    });

    formValues.controls.nombreArticulo.setValue('');
    formValues.controls.precioArticulo.setValue('');
    this.images = [];
  }

  validarForm() {
    if(this.lista.length === 0) {
      this._snackBar.open('Agrega al menos una garantia', 'Cerrar', {
        duration: 3000,
      });
      return;
    }

    this.clienteService.selectTab(3);
  }

  foto(e: any) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = e => {
      this.images.push(e.target?.result as string);
      this.clienteService.formularioCliente.controls.imagenesGarantia.setValue(this.images);
    }
    reader.readAsDataURL(file);
  }

  borrar(i: number) {
    this.images.splice(i, 1);
  }
}
