import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AboutComponent } from './modules/about/about.component';
import { APP_ROUTES } from './app.routes';
import { ProjectsComponent } from './modules/projects/projects.component';
import { HeaderComponent } from './modules/navigation/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
