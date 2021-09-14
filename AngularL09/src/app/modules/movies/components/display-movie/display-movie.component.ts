import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent implements OnInit {
  
  @Input() movie:Movie;
  @Output() movieDeleted:EventEmitter<number>= new EventEmitter();
  @Output() viewURL:EventEmitter<string>=new EventEmitter();

  constructor() { }

  onClickDelete(){
    this.movieDeleted.emit(this.movie.id);
  }
  onClickView(){
    this.viewURL.emit(this.movie.image_url);
  }

  ngOnInit() {
  }

}
