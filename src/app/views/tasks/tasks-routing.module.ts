import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'tasks'},
      {path: 'tasks', component: TasksComponent},
      {path: 'add-task', component: AddTaskComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
