import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportListComponent } from './components/report-list/report-list.component';
import { ReportFormComponent } from './components/report-form/report-form.component'

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
