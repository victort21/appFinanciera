import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteNuevoComponent } from './pages/nuevoCliente/cliente-nuevo/cliente-nuevo.component';
import { MaterialModule } from '../shared/material/material.module';
import { AvalComponent } from './pages/nuevoCliente/aval/aval.component';
import { GarantiasComponent } from './pages/nuevoCliente/garantias/garantias.component';
import { DocumentacionComponent } from './pages/nuevoCliente/documentacion/documentacion.component';
import { CreditoComponent } from './pages/nuevoCliente/credito/credito.component';
import { CalculoCuotaComponent } from './pages/nuevoCliente/calculo-cuota/calculo-cuota.component';
import { ListadoComponent } from './listado/listado.component';
import { HomeComponent } from './components/home/home.component';
import { NuevoCreditoComponent } from './components/tabsNuevoCliente/nuevo-credito.component';


@NgModule({
  declarations: [
    ClienteNuevoComponent,
    AvalComponent,
    GarantiasComponent,
    DocumentacionComponent,
    CreditoComponent,
    CalculoCuotaComponent,
    HomeComponent,
    ListadoComponent,
    NuevoCreditoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ClientesRoutingModule,
    MaterialModule
  ]
})
export class ClientesModule { }
