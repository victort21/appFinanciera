import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RePrestamosRoutingModule } from './re-prestamos-routing.module';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from '../shared/material/material.module';
import { RePrestamoComponent } from './components/tabs/re-prestamo/re-prestamo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreditosModule } from '../creditos/creditos.module';
import { AvalComponent } from '../clientes/pages/nuevoCliente/aval/aval.component';


@NgModule({
  declarations: [
    NuevoComponent,
    HomeComponent,
    RePrestamoComponent
  ],
  imports: [
    CommonModule,
    RePrestamosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    CreditosModule,
  ]
})
export class RePrestamosModule { }
