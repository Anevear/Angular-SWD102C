import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';
import { TaskListComponent } from './task-list/task-list.component';

import {HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations: [AppComponent, TaskListComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}