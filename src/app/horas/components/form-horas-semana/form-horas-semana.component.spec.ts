import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHorasSemanaComponent } from './form-horas-semana.component';

describe('FormHorasSemanaComponent', () => {
  let component: FormHorasSemanaComponent;
  let fixture: ComponentFixture<FormHorasSemanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormHorasSemanaComponent]
    });
    fixture = TestBed.createComponent(FormHorasSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
