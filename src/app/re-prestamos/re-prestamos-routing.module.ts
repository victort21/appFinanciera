import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'nuevo',
        component: NuevoComponent,
      },
      {
        path: '**',
        redirectTo: 'nuevo',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RePrestamosRoutingModule { }
