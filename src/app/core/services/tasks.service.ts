import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Task {
  text: string;
  status?: string;
}
interface ResponceTask extends Task {
  _id: string;
  author: Object;
  createDate: Date;
  ___v: number;
}
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }
  getTasks(): Promise<ResponceTask[]> {
    return this.http.get<ResponceTask[]>('https://ancient-castle-38131.herokuapp.com/tasks/tasks')
      .toPromise();
  }
  addTask(body: Task) {
    return this.http.post('https://ancient-castle-38131.herokuapp.com/tasks/task', body)
      .toPromise();
  }
  updateTask(body: Task, task_id: string) {
    return this.http.put(`https://ancient-castle-38131.herokuapp.com/tasks/task/${task_id}`, body)
      .toPromise();
  }
  deleteTask(task_id: string) {
    return this.http.delete(`https://ancient-castle-38131.herokuapp.com/tasks/task/${task_id}`)
      .toPromise();
  }
}
