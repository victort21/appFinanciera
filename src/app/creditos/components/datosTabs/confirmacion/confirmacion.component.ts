import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ValidatorService } from 'src/app/clientes/services/validator.service';
import { ClienteService } from '../../../../clientes/services/cliente.service';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styles: [`
    label {
      font-size: 15px;
    }
  `]
})
export class ConfirmacionComponent {
  @Input() cliente: any

  confirmarDesembolso: boolean = false;
  ticket: string = '';

  constructor(public clienteService: ClienteService, private _snackBar: MatSnackBar,
              public vs: ValidatorService) {}

  confirmar() {
    const formValues = this.clienteService.confirmacion.controls;
    if(!formValues.recomindaCredito.value || !formValues.comentarios.value) {
      formValues.recomindaCredito.markAsTouched();
      formValues.comentarios.markAsTouched();

      this._snackBar.open('Los campos en rojos son obligatorios', 'Cerrar', {
        duration: 3000,
      });
      return;
    }
    this.confirmarDesembolso = true;
  }

  foto(e: any) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = e => {
      this.ticket = e.target?.result as string;
      this.clienteService.confirmacion.controls.ticket.setValue(this.ticket);
    }
    reader.readAsDataURL(file);
  }

  cancelarDesembolso() {
    this.confirmarDesembolso = false;
    this.clienteService.confirmacion.reset();
    this.ticket = '';
    console.log('Cancelando...');
  }

  desembolsar() {
    this.confirmarDesembolso = false;
    this.ticket = '';
    console.log('Pagando');
    
    this.clienteService.confirmacion.reset();
  }
}
