import { Component, OnInit } from '@angular/core';
import { PersonaService } from './persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  personas: any[] = [];
  nuevaPersona = {
    nombre: '',
    apellido: '',
    dni: ''
  };

  constructor(
    private personaService: PersonaService,
  ){ }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.personaService.getAll()
    .subscribe((data: any) => this.personas = data);
  }

  crear(){
    this.personaService.create(this.nuevaPersona)
    .subscribe(() =>{
      this.load();
      this.nuevaPersona = {
        nombre: '',
        apellido: '',
        dni: ''
      };
    })
  }
}
