import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';


const routes: Routes = [
  {
    path:'tasks',
    component:TaskListComponent
  }
];

@NgModule({
  imports: [
        CommonModule,
        RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}