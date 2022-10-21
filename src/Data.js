class Data {
  constructor(results) {
    this.empty = results?.data.length ? false : true;
    this.name = this.empty ? undefined : results.meta.name;
    this.fields = this.empty ? undefined : results.meta.fields;
    this.data = this.empty ? undefined : results.data;

    this.today = this.empty ? undefined : (new Date()).toLocaleDateString();
    this.lastDay = this.empty ? undefined : this.lastDay();
    this.stats = this.empty ? undefined : {
      today: this.statsToday(),
      week: this.statsWeek(),
      month: this.statsMonth(),
    };
  }

  lastDay() {
    return new Date(this.data[0].date).toLocaleDateString();
  }

  statsToday() {
    // TODO
  }
  
  statsWeek() {
    // TODO
  }

  statsMonth() {
    // TODO
  }


}

export default Data;
