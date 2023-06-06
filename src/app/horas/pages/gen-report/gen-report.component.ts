import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { GenReportService } from '../../services/gen-report.service';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-gen-report',
  templateUrl: './gen-report.component.html',
  styleUrls: ['./gen-report.component.css'],
})
export class GenReportComponent {
  panelOpenState = false;
  allComplete: boolean = false;

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

  constructor(public genReportService: GenReportService) {
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

  crear(){
    this.genReportService.create()
  }

  imprimir() {
    for (let w = 0; w < this.genReportService.weeks.get().length; w++) {
      if (w !== 0) {
        if (this.genReportService.weeks.get()[w].horarios.horarioGeneralSemana.valor === '21:00 - 06:00') {
          this.genReportService.weeks.get()[Number(w) - 1].horarios.horarioGeneralFinSemana.valor = '21:00 - 06:00';
          this.genReportService.weeks.get()[w].horarios.horarioGeneralFinSemana.valor = 'No se trabajó';
          this.genReportService.weeks.get()[Number(w) - 1].horarios.horarioGeneralFinSemana.disabled = true;
        } else if (this.genReportService.weeks.get()[Number(w) - 1].horarios.horarioGeneralFinSemana.disabled === true) {
          this.genReportService.weeks.get()[Number(w) - 1].horarios.horarioGeneralFinSemana.valor = '';
          this.genReportService.weeks.get()[w].horarios.horarioGeneralFinSemana.valor = '';
          this.genReportService.weeks.get()[Number(w) - 1].horarios.horarioGeneralFinSemana.disabled = false;
        }
      } else {
        if (
          this.genReportService.weeks.get()[w].horarios.horarioGeneralSemana.valor === '21:00 - 06:00' &&
          this.genReportService.weeks.get()[w].horarios.horarioGeneralFinSemana.valor === ''
        ) {
          this.genReportService.weeks.get()[w].horarios.horarioGeneralFinSemana.valor = 'No se trabajó';
        }
        if (
          this.genReportService.weeks.get()[w].horarios.horarioGeneralSemana.valor !== '21:00 - 06:00' &&
          this.genReportService.weeks.get()[w].horarios.horarioGeneralFinSemana.valor === 'No se trabajó'
        ) {
          this.genReportService.weeks.get()[w].horarios.horarioGeneralFinSemana.valor = '';
        }
      }
    }
    for (let w = 0; w < this.genReportService.weeks.get().length; w++) {
      let i = 0;
      for (let horario of this.genReportService.weeks.get()[w].horarios.horariosDiarios) {
        if (i < 5) {
          horario.inicio =
          this.genReportService.weeks.get()[w].horarios.horarioGeneralSemana.valor.split(' ')[0];
          horario.fin =
          this.genReportService.weeks.get()[w].horarios.horarioGeneralSemana.valor.split(' ')[2];
        }
        if (
          i >= 5 &&
          this.genReportService.weeks.get()[w].horarios.horarioGeneralFinSemana.valor !== ''
        ) {
          horario.inicio =
          this.genReportService.weeks.get()[w].horarios.horarioGeneralFinSemana.valor.split(' ')[0];
          horario.fin =
          this.genReportService.weeks.get()[w].horarios.horarioGeneralFinSemana.valor.split(' ')[2];
        } else if (i >= 5) {
          if (
            this.genReportService.weeks.get()[w].horarios.horarioGeneralSemana.valor ===
              '06:00 - 14:00' &&
            i < 6
          ) {
            horario.inicio =
            this.genReportService.weeks.get()[w].horarios.horarioGeneralSemana.valor.split(' ')[0];
            horario.fin =
            this.genReportService.weeks.get()[w].horarios.horarioGeneralSemana.valor.split(' ')[2];
          } else {
            horario.inicio = '';
            horario.fin = '';
          }
        }
        i++;
      }
    }
  }

  updateAllComplete(semana: string, checkType: string) {
    for (let i = 0; i < this.genReportService.weeks.get().length; i++) {
      if (this.genReportService.weeks.get()[i].semana === semana) {
        if (
          checkType === 'alm' ||
          checkType === 'trans' ||
          checkType === 'cond'
        ) {
          if (this.genReportService.weeks.get()[i].horarios.horariosDiarios.every((t: any) => t[checkType]))
            this.allComplete = true;
        }
      }
    }
  }

  someComplete(semana: string, checkType: string): boolean {
    for (let i = 0; i < this.genReportService.weeks.get().length; i++) {
      if (this.genReportService.weeks.get()[i].semana === semana) {
        if (
          checkType === 'alm' ||
          checkType === 'trans' ||
          checkType === 'cond'
        ) {
          return (
            this.genReportService.weeks.get()[i].horarios.horariosDiarios.filter((t: any) => t[checkType]).length >
              0 && !this.allComplete
          );
        }
      }
    }
    return false;
  }

  setAll(completed: boolean, semana: string, checkType: string) {
    this.allComplete = completed;
    for (let i = 0; i < this.genReportService.weeks.get().length; i++) {
      if (this.genReportService.weeks.get()[i].semana === semana) {
        if (
          checkType === 'alm' ||
          checkType === 'trans' ||
          checkType === 'cond'
        ) {
          this.genReportService.weeks.get()[i].horarios.horariosDiarios.forEach((t: any) => {
            if (t.inicio !== '' && t.fin !== '') {
              t[checkType] = completed;
            }
            if (completed === false) t[checkType] = completed;
          });
        }
      }
    }
  }
}
