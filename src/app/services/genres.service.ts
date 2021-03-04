import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class GenresService {
  private apiUrl = environment.apiBaseUrl;
  private options = environment.options;
  constructor(
    private http: HttpClient
  ) { }

  getGenresList(): Observable<any> {
    const url = `${this.apiUrl}/movie/list`;
    return this.http.get<any>(
      url,
      this.options
    );
  }

  getMoviesListByGenre(id): Observable<any> {
    const url = `${this.apiUrl}/${id}/movies`;
    return this.http.get<any>(
      url,
      this.options
    );
  }

  getMovieDetails(movieId): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}`;
    return this.http.get<any>(
      url,
      this.options
    );
  }
}
