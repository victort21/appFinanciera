import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CobranzaRoutingModule } from './cobranza-routing.module';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaComponent } from './pages/lista/lista.component';
import { VentanillaPagoComponent } from './pages/ventanilla-pago/ventanilla-pago.component';


@NgModule({
  declarations: [
    HomeComponent,
    InicioComponent,
    ListaComponent,
    VentanillaPagoComponent
  ],
  imports: [
    CommonModule,
    CobranzaRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CobranzaModule { }
