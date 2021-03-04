import { Component, Input, OnInit } from '@angular/core';
import { GenresService } from "../../../services/genres.service";
import { throwError } from "rxjs";
import { LocalStorageService } from "ngx-webstorage";
import { Router } from "@angular/router";


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  moviesList = [];
  @Input() genreId: number;
  constructor(
    private genresService: GenresService,
    private ls: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getMoviesList(this.genreId);
  }

  private getMoviesList(id): void {
    this.genresService.getMoviesListByGenre(id).subscribe(
      result => {
        this.moviesList = result.results;
        console.log(result.results);
      },
      error => {
        throwError(error);
      }
    );
  }

  getMovieDetails(): void {
    this.genresService.getMovieDetails(587807).subscribe(
      result => {
        console.log(result);
      },
      error => {
        throwError(error);
      }
    );
  }

  public onSelect(id): void {
    this.ls.store('movieId', id);
    this.router.navigate([`/description/${id}`]).then();
  }

}
