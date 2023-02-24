import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CobranzaRoutingModule } from './cobranza-routing.module';
import { MaterialModule } from '../shared/material/material.module';

import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaComponent } from './pages/lista/lista.component';
import { VentanillaPagoComponent } from './pages/ventanilla-pago/ventanilla-pago.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { RecaudacionComponent } from './components/datosTabs/recaudacion/recaudacion.component';
import { DatosClienteComponent } from './components/datosTabs/datos-cliente/datos-cliente.component';
import { GaranteComponent } from './components/datosTabs/garante/garante.component';


@NgModule({
  declarations: [
    HomeComponent,
    InicioComponent,
    ListaComponent,
    VentanillaPagoComponent,
    TabsComponent,
    RecaudacionComponent,
    DatosClienteComponent,
    GaranteComponent
  ],
  imports: [
    CommonModule,
    CobranzaRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class CobranzaModule { }
