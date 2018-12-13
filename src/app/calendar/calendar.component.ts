import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {
  currentMonth: number;
  currentYear: number;
  currentDate: string = new Date().toDateString();
  selectedDateString: string;
  selectedDate: Date;
  selectedDay; number;
  weeks: [][];
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.currentMonth = this.dataService.monthNow;
    this.currentYear = this.dataService.yearNow;
    this.updateWeeks();
  }
  getDate(day): string {
    return new Date(this.currentYear, this.currentMonth, day).toDateString();
  }
  updateWeeks(): void {
    this.weeks = this.dataService.getWeeks(this.currentYear, this.currentMonth);
  }
  showPrevMonth(): void {
    if (this.currentMonth - 1 < 0) {
      this.currentYear = --this.currentYear;
      this.currentMonth = 11;
    } else {
      this.currentMonth = this.currentMonth - 1;
    }
    this.updateWeeks();
  }
  showNextMonth(): void {
    if (this.currentMonth + 1 > 11) {
      this.currentYear = ++this.currentYear;
      this.currentMonth = 0;
    } else {
      this.currentMonth = this.currentMonth + 1;
    }
    this.updateWeeks();
  }
  selectDate(day): void {
    if (day) {
      this.selectedDate = new Date(this.currentYear, this.currentMonth, day);
      this.selectedDay = this.selectedDate.getDate();
      this.selectedDateString = this.selectedDate.toDateString();
    }
  }
  getCases(): string[] {
    return this.dataService.getCases(this.currentYear, this.currentMonth, this.selectedDay);
  }
}
