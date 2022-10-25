import moment from 'moment';

class Data {
  constructor(results) {
    this.empty = results?.data.length ? false : true;
    this.name = this.empty ? undefined : results.meta.name;
    this.fields = this.empty ? undefined : results.meta.fields;
    this.data = this.empty ? undefined : results.data;

    this.today = this.empty ? undefined : moment();
    // this.lastDay = this.empty ? undefined : this.findLastDay();
    this.stats = this.empty ? undefined : {
      today: this.statsToday(),
      week: this.statsWeek(),
      month: this.statsMonth(),
    };
  }

  // findLastDay() {
  //   return moment(this.data[this.data.length-1].date);
  // }

  _calcStats(data) {
    const min = data.reduce((prev, curr) => {
      return prev.temp < curr.temp ? prev : curr;
    }, { temp: Number.MAX_SAFE_INTEGER });
    
    const max = data.reduce((prev, curr) => {
      return prev.temp > curr.temp ? prev : curr;
    }, { temp: Number.MIN_SAFE_INTEGER });

    const avg = data.reduce((total, d) => {
      return total + d.temp;
    }, 0) / data.length;

    const last = data[data.length-1];

    return { data, min, max, avg, last };
  }

  statsToday() {
    const data = this.data.filter(d => moment(d.datetime).isSame(this.today, 'day'));
    if (!data.length) return {};
    return this._calcStats(data);
  }
  
  statsWeek() {
    const data = this.data.filter(d => moment(d.datetime).isSame(this.today, 'week'));
    if (!data.length) return {};
    return this._calcStats(data);
  }

  statsMonth() {
    const data = this.data.filter(d => moment(d.datetime).isSame(this.today, 'month'));
    if (!data.length) return {};
    return this._calcStats(data);
  }


}

export default Data;
