import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteNuevoComponent } from './pages/cliente-nuevo/cliente-nuevo.component';
import { MaterialModule } from '../shared/material/material.module';
import { TabsComponent } from './components/tabs/tabs.component';
import { AvalComponent } from './pages/aval/aval.component';
import { GarantiasComponent } from './pages/garantias/garantias.component';
import { DocumentacionComponent } from './pages/documentacion/documentacion.component';
import { CreditoComponent } from './pages/credito/credito.component';
import { CalculoCuotaComponent } from './pages/calculo-cuota/calculo-cuota.component';


@NgModule({
  declarations: [
    ClienteNuevoComponent,
    TabsComponent,
    AvalComponent,
    GarantiasComponent,
    DocumentacionComponent,
    CreditoComponent,
    CalculoCuotaComponent
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
