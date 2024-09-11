import { inject, Injectable } from '@angular/core';
import { Client, TecCard } from '../models/client';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ClientsService } from './clients.service';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private _url: string = 'https://api.tecprendimiento.com/';

  // inject HttpClient here
  public _http = inject(HttpClient);
  public ClientsService = inject(ClientsService);

  /**
   * Retrieves an Observable that emits an array of TecCard objects representing
   * the cards stored on the server.
   *
   * @return {Observable<TecCard[]>} An Observable that emits an array of TecCard
   * objects.
   */
  getClientCards(): Observable<TecCard[]> {
    // let headers = this.headers;
    return this._http.get<TecCard[]>(`${this._url}listCards`);
  }

  /**
   * Retrieves an Observable that emits a single TecCard object representing
   * a card stored on the server, identified by the provided id.
   *
   * @param id - The id of the card to be retrieved.
   * @return {Observable<TecCard>} An Observable that emits a single TecCard
   * object.
   */
  getOneClientCard(id: string): Observable<TecCard> {

      //retorna la carta del cliente que treamos pasando el id  por parametro
    return this._http.get<TecCard>(`${this._url}listCards/${id}`);
  }

  // getClientCard(id: string): TecCard {
  //   return new TecCard(
  //     '3',
  //     id,
  //     'Alexander Figueredo',
  //     '#222222'
  //     // 'brown'
  //   );
  // }

  public user?: any;

  setOneUser(user: any): Observable<any> {
    return (this.user = user);
  }
  getUser(): Observable<any> {
    return this.user;
  }

  getImg(): Observable<any> {
    return this._http.get(`http:/api.tecprendimiento.com/uploads/${this.user.firtsName}_${this.user.lastName}.jpg`);
  }
}
