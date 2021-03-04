import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from "./common/material/material.module";
import { HttpClientModule } from "@angular/common/http";
import { NgxWebstorageModule } from "ngx-webstorage";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { GenresListComponent } from './components/genres-list/genres-list.component';
import { MovieDescriptionComponent } from './components/genres-list/movie-description/movie-description.component';
import { MoviesListComponent } from './components/genres-list/movies-list/movies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GenresListComponent,
    MovieDescriptionComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
