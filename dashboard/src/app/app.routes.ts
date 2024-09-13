import { Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { HomeComponent } from './pages/home/home.component';
import { loginGuard } from './Guards/login.guard';
import {CardModel1Component} from './pages/card/card.component';

import { provideHttpClient } from '@angular/common/http';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'Inicio', component: HomeComponent },
  {
    path: 'clients',
    title: 'Clients',
    component: ClientsComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'card',
    title: 'card',
    component: CardModel1Component ,
    canActivate: [loginGuard],
  },
  {
    path: 'card/:userName',
    title: 'Tarjeta',
    component: CardModel1Component ,
    // canActivate: [loginGuard],
  },
];
