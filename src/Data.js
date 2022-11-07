import moment from 'moment';

class Data {
  constructor(results) {
    this.empty = results?.data.length ? false : true;
    this.name = this.empty ? undefined : results.meta.name;
    this.fields = this.empty ? undefined : results.meta.fields;
    this.data = this.empty ? undefined : results.data;
  
    this.stats = this.empty ? undefined : {
      today: this.statsToday(),
      week: this.statsWeek(),
      month: this.statsMonth(),
    };
  }

  _calcStats(data) {
    const min = data.reduce((prev, curr) => {
      return prev.temp < curr.temp ? prev : curr;
    }, { temp: Number.MAX_SAFE_INTEGER });
    min.temp = +(min.temp).toFixed(2);
    
    const max = data.reduce((prev, curr) => {
      return prev.temp > curr.temp ? prev : curr;
    }, { temp: Number.MIN_SAFE_INTEGER });
    max.temp = +(max.temp).toFixed(2);

    const avg = +(data.reduce((total, d) => {
      return total + d.temp;
    }, 0) / data.length).toFixed(2);

    // const last = data[data.length-1];
    // last.temp = +(last.temp).toFixed(2);

    return { data, min, max, avg };
  }

  statsToday() {
    const data = this.data.filter(d => moment(d.datetime).isSame(moment(), 'day'));
    if (!data.length) return {};
    return this._calcStats(data);
  }
  
  statsWeek() {
    const data = this.data.filter(d => moment(d.datetime).isSame(moment(), 'week'));
    if (!data.length) return {};
    return this._calcStats(data);
  }

  statsMonth() {
    const data = this.data.filter(d => moment(d.datetime).isSame(moment(), 'month'));
    if (!data.length) return {};
    return this._calcStats(data);
  }

  dataLast24Hours() {
    const data = this.data.filter(d => moment(d.datetime).isSameOrAfter(moment().subtract(24, 'hours')));
    if (!data.length) return [];
    return data;
  }

  getDataFromDate(date) {
    const data = this.data.filter(d => moment(d.datetime).isSame(moment(date, 'YYYY-MM-DD'), 'day'));
    if (!data.length) return [];
    return data;
  }
}

export default Data;
