import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreditosRoutingModule } from './creditos-routing.module';
import { PorDesembolsarComponent } from './pages/por-desembolsar/por-desembolsar.component';
import { VerInfoComponent } from './pages/ver-info/ver-info.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { MaterialModule } from '../shared/material/material.module';
import { DatosClienteComponent } from './components/datosTabs/datos-cliente/datos-cliente.component';
import { DatosCreditoComponent } from './components/datosTabs/datos-credito/datos-credito.component';
import { GaleriaComponent } from './components/datosTabs/galeria/galeria.component';
import { ConfirmacionComponent } from './components/datosTabs/confirmacion/confirmacion.component';



@NgModule({
  declarations: [
    PorDesembolsarComponent,
    VerInfoComponent,
    HomeComponent,
    InicioComponent,
    ClienteComponent,
    TabsComponent,
    DatosClienteComponent,
    DatosCreditoComponent,
    GaleriaComponent,
    ConfirmacionComponent,
  ],
  imports: [
    CommonModule,
    CreditosRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class CreditosModule { }
