import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'services',
    title: 'Services',
    component: ServicesComponent,
  },
  {
    path: 'about-us',
    title: 'About Us',
    component: AboutUsComponent,
  },
  {
    path: 'fqa',
    title: 'FQA',
    component: FaqComponent,
  },
  {
    path: 'blog',
    title: 'Blog',
    component: BlogComponent,
  },
  {
    path: '**',
    title: 'home',
    component: HomeComponent,
  },
];
