import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { AboutComponent } from './modules/about/about.component';
import { APP_ROUTES } from './app.routes';
import { ProjectsComponent } from './modules/projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent
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
