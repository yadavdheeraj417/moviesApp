import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresListComponent } from './components/genres-list/genres-list.component';
import { MovieDescriptionComponent } from './components/genres-list/movie-description/movie-description.component';
import { MoviesListComponent } from "./components/genres-list/movies-list/movies-list.component";

const routes: Routes = [
  {
    path: 'genres-list',
    component: GenresListComponent
  },
  {
    path: 'description/:id',
    component: MovieDescriptionComponent
  },
  {
    path: '**',
    redirectTo: '/genres-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
