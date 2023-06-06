import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewReportComponent } from './card-new-report.component';

describe('CardNewReportComponent', () => {
  let component: CardNewReportComponent;
  let fixture: ComponentFixture<CardNewReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNewReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNewReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
