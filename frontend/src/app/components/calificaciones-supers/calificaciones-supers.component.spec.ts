import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionesSupersComponent } from './calificaciones-supers.component';

describe('CalificacionesSupersComponent', () => {
  let component: CalificacionesSupersComponent;
  let fixture: ComponentFixture<CalificacionesSupersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificacionesSupersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionesSupersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
