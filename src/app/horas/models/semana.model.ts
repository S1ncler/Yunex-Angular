import Horarios from "./horarios.model";

class Week {
    semana: string;
    horarios: Horarios;

    constructor(semana: string, horarios: Horarios) {
        this.semana = semana;
        this.horarios = horarios;
    }
}

export default Week;