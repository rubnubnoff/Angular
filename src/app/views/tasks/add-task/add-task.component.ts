import { Component } from '@angular/core';
import { TasksService } from '../../../core/services/tasks.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent {
  form = new FormGroup({
    text: new FormControl(null, Validators.required)
  });
  taskCreated = false;
  constructor(private tasksService: TasksService) { }
  onSubmit() {
    this.tasksService.addTask(this.form.getRawValue())
      .pipe(
        tap(() => this.form.setValue({ text: ''})),
        tap(() => this.form.markAsUntouched()),
        tap(() => this.taskCreated = true),
      )
      .subscribe();
  }
  closeModal() {
    this.taskCreated = false;
  }
}
