import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { APP_ROUTES } from './app.routes';
import { ProjectsComponent } from './components/projects/projects.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { MaterialModule } from './shared/material/material.module';
import { FirebaseModule } from './shared/firebase/firebase.module';
import { HomeComponent } from './components/home/home.component';
import { DomService } from './shared/providers/dom.service';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    HeaderComponent,
    HomeComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MaterialModule,
    FirebaseModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [
    DomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
