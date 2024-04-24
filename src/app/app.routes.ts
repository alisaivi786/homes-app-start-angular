import { Routes } from '@angular/router';

//export const routes: Routes = [];


import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  }
];

