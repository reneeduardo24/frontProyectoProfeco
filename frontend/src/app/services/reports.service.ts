import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Report } from '../models/Report'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {


  API_URI = 'http://localhost:3000/api';


  constructor(private http: HttpClient) { }


  getReports() {
    return this.http.get(`${this.API_URI}/reports`);
  }

  getReport(id: String){
    return this.http.get(`${this.API_URI}/reports/${id}`)
  }

  saveReport(report: Report){
    return this.http.post(`${this.API_URI}/reports/`, report);
  }

  deleteReport(id: String) {
    return this.http.delete(`${this.API_URI}/reports/${id}`);
  }

  updateReport(id: string|number|undefined, updatedGame: Report): Observable<Report> {
    return this.http.put(`${this.API_URI}/reports/${id}`, updatedGame);
  }

}
