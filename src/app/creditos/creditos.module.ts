import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditosRoutingModule } from './creditos-routing.module';
import { PorDesembolsarComponent } from './pages/por-desembolsar/por-desembolsar.component';
import { VerInfoComponent } from './pages/ver-info/ver-info.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    PorDesembolsarComponent,
    VerInfoComponent,
    HomeComponent,
    InicioComponent,
    ClienteComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    CreditosRoutingModule,
    MaterialModule,
  ]
})
export class CreditosModule { }
