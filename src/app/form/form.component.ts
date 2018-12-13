import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  @Input() currentYear: number;
  @Input() currentMonth: number;
  @Input() selectedDay: number;
  caseValue = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
  addCase(): void {
    this.dataService.addCase(this.currentYear, this.currentMonth, this.selectedDay, this.caseValue);
    this.caseValue = '';
  }
}
