import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule),
  },
  {
    path: 'creditos',
    loadChildren: () => import('./creditos/creditos.module').then(m => m.CreditosModule),
  },
  {
    path: 'cobranza',
    loadChildren: () => import('./cobranza/cobranza.module').then(m => m.CobranzaModule),
  },
  {
    path: '**',
    redirectTo: 'auth'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
