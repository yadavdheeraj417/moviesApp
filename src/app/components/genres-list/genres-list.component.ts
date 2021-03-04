import { Component, OnInit } from '@angular/core';
import { GenresService } from "../../services/genres.service";
import { throwError } from "rxjs";

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent implements OnInit {
  genresList = [];

  constructor(
    private genresService: GenresService
  ) { }

  ngOnInit(): void {
    this.getGenresList();
  }

  private getGenresList(): void {
    this.genresService.getGenresList().subscribe(
      result => {
        this.genresList = [...result.genres];
      },
      error => {
        throwError(error);
      }
    );
  }

}
