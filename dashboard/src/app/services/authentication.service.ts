import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root',
})
/**
 * Service responsible for handling authentication-related operations.
 */
export class AuthenticationService {
  // the URL for the authentication endpoint
  // public url = 'http://localhost:3000/authentication';
  public url = 'https://api.tecprendimiento.com/authentication';
  public urlCreate = 'https://api.tecprendimiento.com/register';

  // inject the HttpClient service
  public Http: HttpClient = inject(HttpClient);

  /**
   * Logs in a user with the provided email and password.
   * @param email The user's email.
   * @param password The user's password.
   * @returns An Observable that emits a Client object.
   */
  login(email: string, password: string): Observable<Client> {
    return this.Http.post<any>(`${this.url}`, { email, password }).pipe(
      map((data: any) => {
        // store the token in local storage
        localStorage.setItem('tokenAdmin', data.token);
        return data;
      })
    );
  }

  register(email: string, password: string): Observable<Client> {
    return this.Http.post<any>(`${this.urlCreate}`, { email, password }).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
