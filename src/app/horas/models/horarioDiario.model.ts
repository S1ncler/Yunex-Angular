class HorarioDiario {
  inicio: string;
  fin: string;
  alm: boolean;
  trans: boolean;
  cond: boolean;

  constructor(
    inicio: string,
    fin: string,
    alm: boolean,
    trans: boolean,
    cond: boolean
  ) {
    this.inicio = inicio;
    this.fin = fin;
    this.alm = alm;
    this.trans = trans;
    this.cond = cond;
  }
}

export default HorarioDiario;