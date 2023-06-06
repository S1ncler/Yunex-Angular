import Week from "./semana.model";

class Report {
    weeks: Week[];

    constructor(weeks: Week[]){
        this.weeks = weeks;
    }
    length(): number{
        return this.weeks.length;
    }
    pos(i: number): Week{
        return this.weeks[i];
    }
    get(): Week[]{
        return this.weeks
    }
}

export default Report;