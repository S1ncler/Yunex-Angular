import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-gen-report',
  templateUrl: './gen-report.component.html',
  styleUrls: ['./gen-report.component.css'],
})
export class GenReportComponent {

  panelOpenState = false;
  weeks = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
  weekDays = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  horarios = ['No se trabajo', '6:00 - 16:30', '11:30 - 22:00', '21:00 - 6:00'];
  horas: string[] = [""]

  constructor() {
    for (let i = 0; i < 24; i++){
      if (i < 10) {
        this.horas.push(`0${i}:00`)
        this.horas.push(`0${i}:30`)
      }
      if (i >= 10) {
        this.horas.push(`${i}:00`)
        this.horas.push(`${i}:30`)
      }
    }
  }

  onOption1Change(event: Event) {

  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
