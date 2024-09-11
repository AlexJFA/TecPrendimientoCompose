import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client, TecCard, TecComponent } from '../models/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  // inject HttpClient here
  public http = inject(HttpClient);

  // the URL for the client endpoint

  // private _url: string = 'http://localhost:3000/';
  private _url: string = 'https://api.tecprendimiento.com/';

  // get the token from local storage
  public token = localStorage.getItem('tokenAdmin');

  // create a new HttpHeaders object with the token in the Authorization header
  // and set the content type to application/json
  public headers = new HttpHeaders({ authorization: `${this.token}` });

  /**
   * Represents the getClients method.
   * This method is responsible for fetching client data from the server.
   */

  /**
   * Retrieves a list of all clients from the server.
   * @returns An Observable that emits a Client array.
   */
  getClients(): Observable<Client[]> {
    let headers = this.headers;

    return this.http.get<Client[]>(`${this._url}listClients`, { headers });
  }

  /**
   * Retrieves a single client from the server by its id.
   * @param id The id of the client to retrieve.
   * @returns An Observable that emits a Client object.
   */
  getOneClient(userName:string): Observable<Client> {
    // let headers = this.headers;
    return this.http.get<Client>(`${this._url}client/${userName}`);
  }

  /**
   * Adds a new client to the server.
   *
   * @param formData - The client data to be added, as a FormData object.
   * @returns An Observable that emits the added client data, as a FormData object.
   */
  addClient(formData: FormData): Observable<FormData> {
    let headers = this.headers;
    return this.http.post<FormData>(`${this._url}newClient`, formData, {
      headers,
    });
  }

  /**
   * Updates a client in the server.
   *
   * @param client - The client data to be updated, as a Client or FormData object.
   * @param id - The id of the client to be updated.
   * @returns An Observable that emits the updated client data, as a Client or FormData object.
   * @throws {Error} if the provided client type is neither Client nor FormData.
   */
  updateClient(
    client: Client | FormData,
    id: string
  ): Observable<Client | FormData> {
    let headers = this.headers;

    if (client instanceof Client) {
      return this.http.patch<Client>(`${this._url}updateClient/${id}`, client, {
        headers,
      });
    } else {
      return this.http.patch<FormData>(
        `${this._url}updateClient/${id}`,
        client,
        { headers }
      );
    }

    //  throw new Error('Invalid client type');
  }

  /**
   * Deletes a client from the server.
   *
   * @param id - The id of the client to be deleted.
   * @returns An Observable that emits the deleted client data, as a Client object.
   */
  deleteClient(id: string): Observable<Client> {
    let headers = this.headers;
    return this.http.delete<Client>(`${this._url}deleteClient/${id}`, {
      headers,
    });
  }
}
