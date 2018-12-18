import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { FormControl, Validators } from '@angular/forms';
import { Task } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {
  textValue = new FormControl('', Validators.required);
  private status: string;
  tasksPromise;
  updatingTaskId: string ;
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksPromise = this.tasksService.getTasks();
  }
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
  this.tasksService.updateTask(body, task_id).then(() => {
    this.tasksPromise = this.tasksService.getTasks();
    this.cancel();
  });
  }
  deleteTask(task_id: string): void {
    this.tasksService.deleteTask(task_id).then(() => {
      this.tasksPromise = this.tasksService.getTasks();
    });
  }
}
