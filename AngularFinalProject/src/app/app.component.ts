import { Component } from '@angular/core';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent {
      title = 'Angular Final Project';
      author = 'Anevear Jamie';
      tagline = 'Getting better at programming and coding, day by day.';
      aboutMe = 'This project lets the User delete the listed tasks to create a program, by clicking a button.'
    }