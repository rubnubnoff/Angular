import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, TasksComponent, AddTaskComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }
