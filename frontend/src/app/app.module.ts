import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ReportFormComponent } from './components/report-form/report-form.component';
import { ReportListComponent } from './components/report-list/report-list.component';

import { ReportsService } from './services/reports.service';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { CalificacionesSupersComponent } from './components/calificaciones-supers/calificaciones-supers.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ReportFormComponent,
    ReportListComponent,
    ListaProductosComponent,
    CalificacionesSupersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ReportsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
