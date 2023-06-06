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

  weeks = [
    {
      semana: 'Semana 1',
      horarios: {
        horarioGeneralSemana: { valor: '', disabled: false },
        horarioGeneralFinSemana: { valor: '', disabled: false },
        horariosDiarios: [
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
        ],
      },
    },
    {
      semana: 'Semana 2',
      horarios: {
        horarioGeneralSemana: { valor: '', disabled: false },
        horarioGeneralFinSemana: { valor: '', disabled: false },
        horariosDiarios: [
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
        ],
      },
    },
    {
      semana: 'Semana 3',
      horarios: {
        horarioGeneralSemana: { valor: '', disabled: false },
        horarioGeneralFinSemana: { valor: '', disabled: false },
        horariosDiarios: [
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
        ],
      },
    },
    {
      semana: 'Semana 4',
      horarios: {
        horarioGeneralSemana: { valor: '', disabled: false },
        horarioGeneralFinSemana: { valor: '', disabled: false },
        horariosDiarios: [
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
          { inicio: '', fin: '' },
        ],
      },
    },
  ];
  weekDays = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
  ];
  horarios = [
    'No se trabajó',
    '06:00 - 16:30',
    '06:00 - 14:00',
    '11:30 - 22:00',
    '21:00 - 06:00',
  ];
  horas: string[] = [''];

  constructor() {
    for (let i = 0; i < 24; i++) {
      if (i < 10) {
        this.horas.push(`0${i}:00`);
        this.horas.push(`0${i}:30`);
      }
      if (i >= 10) {
        this.horas.push(`${i}:00`);
        this.horas.push(`${i}:30`);
      }
    }
  }

  onOption1Change(event: Event) {}

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  imprimir() {
    for (let w = 0; w < this.weeks.length; w++) {
      if (w !== 0) {
        if (
          this.weeks[w].horarios.horarioGeneralSemana.valor === '21:00 - 06:00'
        ) {
          this.weeks[Number(w) - 1].horarios.horarioGeneralFinSemana.valor =
            '21:00 - 06:00';
          this.weeks[w].horarios.horarioGeneralFinSemana.valor =
            'No se trabajó';
          this.weeks[Number(w) - 1].horarios.horarioGeneralFinSemana.disabled =
            true;
        } else if (
          this.weeks[Number(w) - 1].horarios.horarioGeneralFinSemana
            .disabled === true
        ) {
          this.weeks[Number(w) - 1].horarios.horarioGeneralFinSemana.valor = '';
          this.weeks[w].horarios.horarioGeneralFinSemana.valor = '';
          this.weeks[Number(w) - 1].horarios.horarioGeneralFinSemana.disabled =
            false;
        }
      } else {
        if (
          this.weeks[w].horarios.horarioGeneralSemana.valor ===
            '21:00 - 06:00' &&
          this.weeks[w].horarios.horarioGeneralFinSemana.valor === ''
        ) {
          this.weeks[w].horarios.horarioGeneralFinSemana.valor =
            'No se trabajó';
        }
        if (
          this.weeks[w].horarios.horarioGeneralSemana.valor !==
            '21:00 - 06:00' &&
          this.weeks[w].horarios.horarioGeneralFinSemana.valor ===
            'No se trabajó'
        ) {
          this.weeks[w].horarios.horarioGeneralFinSemana.valor = '';
        }
      }
    }
    for (let w = 0; w < this.weeks.length; w++) {
      let i = 0;
      for (let horario of this.weeks[w].horarios.horariosDiarios) {
        if (i < 5) {
          horario.inicio =
            this.weeks[w].horarios.horarioGeneralSemana.valor.split(' ')[0];
          horario.fin =
            this.weeks[w].horarios.horarioGeneralSemana.valor.split(' ')[2];
        }
        if (
          i >= 5 &&
          this.weeks[w].horarios.horarioGeneralFinSemana.valor !== ''
        ) {
          horario.inicio =
            this.weeks[w].horarios.horarioGeneralFinSemana.valor.split(' ')[0];
          horario.fin =
            this.weeks[w].horarios.horarioGeneralFinSemana.valor.split(' ')[2];
        } else if(i >= 5){
          if (
            this.weeks[w].horarios.horarioGeneralSemana.valor ===
              '06:00 - 14:00' &&
            i < 6
          ) {
            horario.inicio =
              this.weeks[w].horarios.horarioGeneralSemana.valor.split(
                ' '
              )[0];
            horario.fin =
              this.weeks[w].horarios.horarioGeneralSemana.valor.split(
                ' '
              )[2];
          } else {
            horario.inicio = '';
            horario.fin = '';
          }
        }
        i++;
      }
    }
  }
}
