import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportListComponent } from './components/report-list/report-list.component';
import { ReportFormComponent } from './components/report-form/report-form.component'
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component'
import { CalificacionesSupersComponent } from './components/calificaciones-supers/calificaciones-supers.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: '/reports',
    pathMatch: 'full'
  },
  {
    path: 'reports',
    component: ReportListComponent
  },
  {
    path: 'reports/add',
    component: ReportFormComponent
  },
  {
    path: 'reports/edit/:id',
    component: ReportFormComponent
  },
  {
    path: 'reports/listpro',
    component: ListaProductosComponent
  },
  {
    path: 'reports/Supers',
    component: CalificacionesSupersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
