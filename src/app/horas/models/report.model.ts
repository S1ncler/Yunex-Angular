import Week from "./semana.model";

class Report {
    weeks: Week[];
    userId: string;

    constructor(weeks: Week[], userId: string){
        this.weeks = weeks;
        this.userId = userId;
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