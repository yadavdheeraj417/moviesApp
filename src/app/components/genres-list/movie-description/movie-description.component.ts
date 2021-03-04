import { Component, OnInit } from '@angular/core';
import { GenresService } from "../../../services/genres.service";
import { LocalStorageService } from "ngx-webstorage";
import { throwError } from "rxjs";

export interface movieDetailsInterface {
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  original_language: string;
  popularity: number;
  release_date: Date;
  revenue: number;
}

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css']
})
export class MovieDescriptionComponent implements OnInit {
  movieDetails: movieDetailsInterface;
  constructor(
    private genreService: GenresService,
    private ls: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.getMovieDetails();
  }

  getMovieDetails(): void {
    this.genreService.getMovieDetails(this.ls.retrieve('movieId')).subscribe(
      result => {
        this.movieDetails = result;
        if (this.movieDetails.original_language === 'en') {
          this.movieDetails.original_language = 'English';
        }
      },
      error => {
        throwError(error);
      }
    );
  }

}
