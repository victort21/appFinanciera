import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaComponent } from './pages/lista/lista.component';
import { VentanillaPagoComponent } from './pages/ventanilla-pago/ventanilla-pago.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: InicioComponent
      },
      {
        path: 'lista',
        component: ListaComponent,
      },
      {
        path: 'ventanilla-pago',
        component: VentanillaPagoComponent,
      },
      {
        path: '**',
        redirectTo: 'lista'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CobranzaRoutingModule { }
