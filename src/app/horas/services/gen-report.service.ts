import { Injectable } from '@angular/core';
import Week from '../models/semana.model';
import Horarios from '../models/horarios.model';
import HorarioDiario from '../models/horarioDiario.model';
import Report from '../models/report.model';

@Injectable({
  providedIn: 'root',
})
export class GenReportService {
  public weeks: Report = new Report([
    new Week(
      'Semana 1',
      new Horarios(
        { inicio: '', fin: '' },
        { valor: '', disabled: false },
        { valor: '', disabled: false },
        false,
        false,
        false,
        [
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
        ]
      )
    ),
    new Week(
      'Semana 2',
      new Horarios(
        { inicio: '', fin: '' },
        { valor: '', disabled: false },
        { valor: '', disabled: false },
        false,
        false,
        false,
        [
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
        ]
      )
    ),
    new Week(
      'Semana 3',
      new Horarios(
        { inicio: '', fin: '' },
        { valor: '', disabled: false },
        { valor: '', disabled: false },
        false,
        false,
        false,
        [
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
        ]
      )
    ),
    new Week(
      'Semana 4',
      new Horarios(
        { inicio: '', fin: '' },
        { valor: '', disabled: false },
        { valor: '', disabled: false },
        false,
        false,
        false,
        [
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
        ]
      )
    ),
    new Week(
      'Semana 5',
      new Horarios(
        { inicio: '', fin: '' },
        { valor: '', disabled: false },
        { valor: '', disabled: false },
        false,
        false,
        false,
        [
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
          new HorarioDiario('', '', false, false, false),
        ]
      )
    ),
  ]);

  constructor() {}

  create(){
    console.log(this.weeks)
  }
}
