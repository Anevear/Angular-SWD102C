import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  taskUrl="http://localhost:3000/task";

  getTask=():Observable<Task[]>=>{
    return this.http.get<Task[]>(this.taskUrl);
  }

  constructor(private http:HttpClient) { }

}