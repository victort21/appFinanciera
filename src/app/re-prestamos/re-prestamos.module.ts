import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RePrestamosRoutingModule } from './re-prestamos-routing.module';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    NuevoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RePrestamosRoutingModule
  ]
})
export class RePrestamosModule { }
