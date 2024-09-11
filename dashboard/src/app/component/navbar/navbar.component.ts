import { Component, inject, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import swal from 'sweetalert';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: [HttpClientModule],
})
export class NavbarComponent implements OnInit {
  // declare a variable to store the login status
  public isLogged: boolean = localStorage.getItem('tokenAdmin') ? true : false;

  // inject the AuthenticationService and Router services
  public authenticationService = inject(AuthenticationService);

  // inject the Router service
  public router = inject(Router);

  public userAdmin: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  /**
   * Logs in a user with the provided email and password.
   * @param email The user's email.
   * @param password The user's password.
   * @returns An Observable that emits a Client object.
   */
  // login the user
  login() {
    let email = this.userAdmin.value.email;
    let password = this.userAdmin.value.password;
    let backendResponse: any = {};

    // call the login method of the AuthenticationService
    this.authenticationService.login(email, password).subscribe((data: any) => {
      backendResponse = data;

      // show a sweet alert with the response from the backend
      //  show a sweet alert with the response from the backend
      swal({
        // title of the alert
        title: `${backendResponse.title}`,
        // text of the alert
        text: `${backendResponse.message}`,
        // status of the alert (success, error, etc)
        icon: `${backendResponse.status}`,
        // buttons of the alert (true or false to show the buttons)
        buttons: [false],
        // time in milliseconds to show the alert
        timer: 3000,
      });

      // if the response contains a token, navigate to the clients page
      if (data.token) {
        // change the value of the isLogged variable to true
        this.isLogged = true;
        // navigate to the clients page
        this.router.navigate(['/clients']);
      }
    });
  }
  register() {
    let email = this.userAdmin.value.email;
    let password = this.userAdmin.value.password;
    let backendResponse: any = {};

    // call the login method of the AuthenticationService
    this.authenticationService.register(email, password).subscribe((data: any) => {
      backendResponse = data;

      // show a sweet alert with the response from the backend
      //  show a sweet alert with the response from the backend
      swal({
        // title of the alert
        title: `${backendResponse.title}`,
        // text of the alert
        text: `${backendResponse.message}`,
        // status of the alert (success, error, etc)
        icon: `${backendResponse.status}`,
        // buttons of the alert (true or false to show the buttons)
        buttons: [false],
        // time in milliseconds to show the alert
        timer: 3000,
      });

      // if the response contains a token, navigate to the clients page
      if (data.token) {
        // change the value of the isLogged variable to true
        this.isLogged = true;
        // navigate to the clients page
        this.router.navigate(['/clients']);
      }
    });
  }

  /**
   * Logout the user.
   *
   * This function removes the token from local storage, sets the isLogged variable to false,
   * and navigates to the home page.
   */
  logout() {
    // Remove the token from local storage
    localStorage.removeItem('tokenAdmin');

    // Set the isLogged variable to false
    this.isLogged = false;

    // Navigate to the home page
    this.router.navigate(['/home']);
  }
  // logout the user



}
