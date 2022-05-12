import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(
    private http: HttpClient
  ) { }


    getAll() {
      return this.http.get('http://localhost:8080/api/v1/personas')
    }

    create(data: any) {
      return this.http.post('http://localhost:8080/api/v1/personas', data)
    }

}
