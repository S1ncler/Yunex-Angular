import HorarioDiario from './horarioDiario.model';
import Fechas from './Fechas.model';
import Horario from './Horario.model';

class Horarios {
  fechas: Fechas;
  horarioGeneralSemana: Horario;
  horarioGeneralFinSemana: Horario;
  alm: boolean;
  trans: boolean;
  cond: boolean;
  horariosDiarios: HorarioDiario[];

  constructor(
    fechas: Fechas,
    horarioGeneralSemana: Horario,
    horarioGeneralFinSemana: Horario,
    alm: boolean,
    trans: boolean,
    cond: boolean,
    horariosDiarios: HorarioDiario[]
  ) {
    this.fechas = fechas;
    this.horarioGeneralSemana = horarioGeneralSemana;
    this.horarioGeneralFinSemana = horarioGeneralFinSemana;
    this.alm = alm;
    this.trans = trans;
    this.cond = cond;
    this.horariosDiarios = horariosDiarios;
  }
}

export default Horarios;
