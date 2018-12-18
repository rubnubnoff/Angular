import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent implements OnInit {
  form = new FormGroup({
    text: new FormControl(null, Validators.required)
  });
  taskCreated = false;
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.tasksService.addTask(this.form.getRawValue()).then(() => {
      this.form.setValue({ text: ''});
      this.form.markAsUntouched();
      this.taskCreated = true;
  });
  }
  closeModal() {
    this.taskCreated = false;
  }
}
