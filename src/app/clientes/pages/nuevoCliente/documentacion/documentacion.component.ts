import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ClienteService } from '../../../services/cliente.service';
import { ValidatorService } from '../../../services/validator.service';

interface Docs {
  tipo: string | null | undefined
  imagenes?: string[]
}

@Component({
  selector: 'app-documentacion',
  templateUrl: './documentacion.component.html'
})
export class DocumentacionComponent {

  images: string[] = [];
  lista: Docs[] = [];

  constructor(public vs: ValidatorService,
              public clienteService: ClienteService, private _snackBar: MatSnackBar) {}
    
  agregarALista() {
    const formValues = this.clienteService.formularioCliente;

    if(!formValues.value.tipoDocumentacion) {
      this._snackBar.open('Selecciona un tipo de documentación', 'Ok', {
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
      tipo: formValues.controls.tipoDocumentacion.value,
      imagenes: this.images,
    });

    formValues.controls.nombreArticulo.setValue('');
    formValues.controls.precioArticulo.setValue('');
    this.images = [];
  }

  validarForm() {
    if(this.lista.length === 0) {
      this._snackBar.open('Agrega al menos un documento', 'Cerrar', {
        duration: 3000,
      });
      return;
    }

    this.clienteService.selectTab(4);
  }

  foto(e: any) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = e => {
      this.images.push(e.target?.result as string);
      this.clienteService.formularioCliente.controls.imagenesDocs.setValue(this.images);
    }
    reader.readAsDataURL(file);
  }

  borrar(i: number) {
    this.images.splice(i, 1);
  }
}
