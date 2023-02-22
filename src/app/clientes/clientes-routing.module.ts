import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NuevoCreditoComponent } from './components/tabsNuevoCliente/nuevo-credito.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'nuevo',
        component: NuevoCreditoComponent,
      },
      {
        path: 'listado',
        component: ListadoComponent,
      },
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
