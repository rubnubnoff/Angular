import { Injectable } from '@angular/core';

interface Menu {
  title: string;
  link: string;
}
@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor() { }
  menu: Menu[] = [
    {title: 'Мои задачи', link: 'tasks'},
    {title: 'Создать задачу', link: 'add-task'}
  ];
}
