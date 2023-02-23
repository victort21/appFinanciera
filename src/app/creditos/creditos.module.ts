import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditosRoutingModule } from './creditos-routing.module';
import { PorDesembolsarComponent } from './pages/por-desembolsar/por-desembolsar.component';
import { VerInfoComponent } from './pages/ver-info/ver-info.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';


@NgModule({
  declarations: [
    PorDesembolsarComponent,
    VerInfoComponent,
    HomeComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    CreditosRoutingModule
  ]
})
export class CreditosModule { }
