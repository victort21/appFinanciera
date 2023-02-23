import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { PorDesembolsarComponent } from './pages/por-desembolsar/por-desembolsar.component';
import { VerInfoComponent } from './pages/ver-info/ver-info.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'por-desembolsar',
        component: PorDesembolsarComponent,
      },
      {
        path: 'informacion/:id',
        component: VerInfoComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditosRoutingModule { }
