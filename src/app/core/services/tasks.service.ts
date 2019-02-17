import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
export interface Task {
  text: string;
  status?: string;
  createDate?: Date;
}
interface ResponceTask extends Task {
  _id: string;
  author: Object;
  ___v: number;
}
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }
  getTasks(): Observable<ResponceTask[]> {
    return this.http.get<ResponceTask[]>('https://ancient-castle-38131.herokuapp.com/tasks/tasks')
      .pipe(share());
  }
  addTask(body: Task): Observable<Task> {
    return this.http.post<Task>('https://ancient-castle-38131.herokuapp.com/tasks/task', body)
      .pipe(share());
  }
  updateTask(body: Task, task_id: string): Observable<Task> {
    return this.http.put<Task>(`https://ancient-castle-38131.herokuapp.com/tasks/task/${task_id}`, body)
      .pipe(share());
  }
  deleteTask(task_id: string): Observable<Task> {
    return this.http.delete<Task>(`https://ancient-castle-38131.herokuapp.com/tasks/task/${task_id}`)
      .pipe(share());
  }
}
