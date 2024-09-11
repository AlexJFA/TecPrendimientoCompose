import { Component, inject, OnInit } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    NavbarComponent,
  ],
  providers: [HttpClientModule],
})
/**
 * Represents the root component of the application.
 */
export class AppComponent implements OnInit {
  // inject the Router service
  public router = inject(Router);

  ngOnInit(): void {}
}
