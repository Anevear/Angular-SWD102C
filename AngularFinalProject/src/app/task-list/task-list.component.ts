import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskDataService } from '../service/task-data.service';

import { Task } from '../model/task.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public task:Task[];

  @Input() tasks:Task;
  @Output() taskDeleted:EventEmitter<number>= new EventEmitter();
 

  constructor(private taskData:TaskDataService) {
    this.taskData.getTask().subscribe(t=>this.task=t)
   }

  
   deleteTask(task:number){
     //alert("Deleted");
     this.task=this.task.filter((v,i)=>i !==task);
     //this.taskDeleted.emit(this.tasks.id);
   } 

   //deleteTask(id:number):Observable<Task>{
   // return this.http.delete<Task>(this.taskUrl+"/"+id);
  //}
  

  ngOnInit() {
    
  }
 // onTaskDeleted(taskId){
  //  let taskIndex=0;
   // for(let task of this.tasks) {
    //  if (task.id === taskId){
     //   this.task.splice(taskIndex, 1);
      //  break;
      //}
     // taskIndex++;
    //} }

}
