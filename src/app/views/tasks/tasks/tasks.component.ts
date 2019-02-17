import { Component } from '@angular/core';
import { TasksService } from '../../../core/services/tasks.service';
import { FormControl, Validators } from '@angular/forms';
import { Task } from '../../../core/services/tasks.service';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent {
  textValue = new FormControl('', Validators.required);
  private status: string;
  tasks$ = this.tasksService.getTasks();
  updatingTaskId: string ;
  constructor(private tasksService: TasksService) { }


  changeTask(task_id: string, task_text: string, task_status: string): void {
    this.updatingTaskId = task_id;
    this.textValue.setValue(task_text);
    this.status = task_status;
  }
  changeStatus(): void {
    this.status = this.status === 'done' ? 'active' : 'done';
  }
  cancel(): void {
    this.updatingTaskId = '';
    this.textValue.setValue('');
  }
  updateTask(task_id: string): void {
    const body: Task = {
    text: this.textValue.value,
    status: this.status
  };
  this.tasksService.updateTask(body, task_id)
    .pipe(
      tap(() => this.tasks$ = this.tasksService.getTasks()),
      tap(() => this.cancel())
    )
    .subscribe();
  }
  deleteTask(task_id: string): void {
    this.tasksService.deleteTask(task_id)
    .pipe(
      tap(() => this.tasks$ = this.tasksService.getTasks())
    )
    .subscribe();
  }
}
