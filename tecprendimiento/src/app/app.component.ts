import { Component, inject, OnInit } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { Route} from "@angular/router"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HomeComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Project';

  constructor(private _router: Router) {}

  ngOnInit(): void {
    // this._router.navigateByUrl('/');
    // this._router.navigateByUrl('/home');
    // this._router.navigateByUrl('/services');
    // this._router.navigateByUrl('/fqa');
  }
}
