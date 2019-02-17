import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnonimousGuard } from './services/anonimous.guard';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  },
  {
    path: 'auth',
    loadChildren: 'src/app/views/auth/auth.module#AuthModule',
    canActivate: [AnonimousGuard]
  },
  {
    path: 'tasks',
    loadChildren: 'src/app//views/tasks/tasks.module#TasksModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
