import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.sass']
})
export class CalendarDayComponent implements OnInit {
  @Input() selectedDate: Date;
  @Input() cases: string[];
  constructor() { }

  ngOnInit() {
  }

}
