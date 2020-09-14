import { Routes } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { ProjectsComponent } from './modules/projects/projects.component';

export const APP_ROUTES: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent }
];
