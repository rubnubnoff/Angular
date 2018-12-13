import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  yearNow: number = new Date().getFullYear();
  monthNow: number = new Date().getMonth();
  cases = {};
  constructor() { }

  getWeeks(year: number, month: number): [][] {
    const lastDay = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay() ? new Date(year, month, 1).getDay() - 1 : 6;
    let days = [];
    const weeks = [];
    for (let i = 1; i <= lastDay; i++) {
      days.push(i);
    }
    days = [...Array(firstDay), ...days];
    while (days.length) {
      weeks.push(days.splice(0, 7));
    }
    const lastWeek = weeks[weeks.length - 1];
    if (lastWeek.length !== 7) {
      weeks[weeks.length - 1] = [...lastWeek, ...Array(7 - lastWeek.length)];
    }
    return weeks;
  }

  addCase(year: number, month: number, day: number, caseValue): void {
    const key = `${year}${month}${day}`;
    if (key in this.cases) {
      this.cases[key] = [...this.cases[key], caseValue];
    } else {
      this.cases[key] = [caseValue];
    }
  }

  getCases(year: number, month: number, day: number): string[] {
    return this.cases[`${year}${month}${day}`];
  }
}
