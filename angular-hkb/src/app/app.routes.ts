import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const APP_ROUTES: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent }
];
