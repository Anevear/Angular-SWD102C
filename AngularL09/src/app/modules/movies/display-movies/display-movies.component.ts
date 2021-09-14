import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-display-movies',
  templateUrl: './display-movies.component.html',
  styleUrls: ['./display-movies.component.css']
})
export class DisplayMoviesComponent implements OnInit {
  public movies: Movie[];

  private moviesRoute='http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  getMovies(){
    this.http.get<Movie[]>(this.moviesRoute).subscribe(movies=>{
      this.movies=movies;
      console.log('Movies', this.movies);
    });
  }

  ngOnInit() {
    this.getMovies();
  }

  onMovieDeleted(movieId: number){
    let movieIndex=0;
    for(let movie of this.movies){
      if(movie.id === movieId){
        this.movies.splice(movieIndex,1);
        break;
      }
      movieIndex++;
    }
  }
  onViewURL(url: string){
    window.open(url);
  }

}

