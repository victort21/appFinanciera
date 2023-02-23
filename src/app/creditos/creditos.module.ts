import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditosRoutingModule } from './creditos-routing.module';
import { PorDesembolsarComponent } from './pages/por-desembolsar/por-desembolsar.component';
import { VerInfoComponent } from './pages/ver-info/ver-info.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    PorDesembolsarComponent,
    VerInfoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CreditosRoutingModule
  ]
})
export class CreditosModule { }
