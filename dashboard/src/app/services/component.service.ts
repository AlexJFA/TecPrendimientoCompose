import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TecComponent } from '../models/client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  private _url: string = 'https://api.tecprendimiento.com/';
  private _http = inject(HttpClient);

  /**
   * Retrieves an Observable that emits an array of TecComponent objects
   * representing the components stored on the server.
   *
   * @return {Observable<TecComponent[]>} An Observable that emits an array of
   * TecComponent objects.
   */
  getallComponents(): Observable<TecComponent[]> {
    return this._http.get<TecComponent[]>(`${this._url}listComponents`);
  }

  /**
   * Retrieves an Observable that emits a single TecComponent object
   * representing the component stored on the server, identified by the
   * provided cardId.
   *
   * @param cardId - The id of the card that the component belongs to.
   * @return {Observable<TecComponent>} An Observable that emits a single
   * TecComponent object.
   */
  getOneClientComponent(cardId: string): Observable<TecComponent> {
    return this._http.get<TecComponent>(`${this._url}listComponents/${cardId}`);
  }

  // getallComponents(cardId: string): TecComponent[] {
  //   return [
  //     new TecComponent(
  //       '1',
  //       cardId,
  //       '1',
  //       'avatar',
  //       '../../../../assets/images/piero-min.png',
  //       // 'rounded-circle',
  //       'rounded-5',
  //       '',
  //       '',
  //       '',
  //       ''
  //     ),
  //     new TecComponent(
  //       '2',
  //       cardId,
  //       '2',
  //       'title',
  //       'Alexander Figueredo',
  //       'italic',
  //       // 'Arial',
  //       '1.7rem',
  //       'white',
  //       '',
  //       ''
  //     ),
  //     new TecComponent(
  //       '3',
  //       cardId,
  //       '3',
  //       'description',
  //       'Ingeniero con más de 6 años de experiencia y conocimiento en el sector de TI.',
  //       'italic',
  //       // 'Arial',
  //       '1.2rem',
  //       'white',
  //       '',
  //       ''
  //     ),
  //     new TecComponent(
  //       '4',
  //       cardId,
  //       '4',
  //       'whatsapp',
  //       '+51931760528',
  //       '#1c3b4d',
  //       'rgba(255, 255, 255, 0.929)',
  //       '',
  //       // '1px 2px 2px rgba(255, 254, 254, 0.75)',
  //       'hover',
  //       ''
  //     ),

  //     new TecComponent(
  //       '5',
  //       cardId,
  //       '5',
  //       'linkedin',
  //       'https://www.linkedin.com/in/alexander-figueredo/',
  //       '#1c3b4d',
  //       'rgba(255, 255, 255, 0.929)',
  //       '',
  //       // '1px 2px 2px rgba(255, 254, 254, 0.75)',
  //       'hover',
  //       ''
  //     ),
  //     new TecComponent(
  //       '6',
  //       cardId,
  //       '6',
  //       'facebook',
  //       'https://www.facebook.com/Alex237823',
  //       '#1c3b4d',
  //       'rgba(255, 255, 255, 0.929)',
  //       '',
  //       // '1px 2px 2px rgba(255, 254, 254, 0.75)',
  //       'hover',
  //       ''
  //     ),
  //     new TecComponent(
  //       '7',
  //       cardId,
  //       '7',
  //       'instagram',
  //       'https://www.instagram.com/figueredoalexander/',
  //       '#1c3b4d',
  //       'rgba(255, 255, 255, 0.929)',
  //       '',
  //       // '1px 2px 2px rgba(255, 254, 254, 0.75)',
  //       'hover',
  //       ''
  //     ),
  //     new TecComponent(
  //       '8',
  //       cardId,
  //       '8',
  //       'twitter_x',
  //       'https://x.com/',
  //       '#1c3b4d',
  //       'rgba(255, 255, 255, 0.929)',
  //       '',
  //       // '1px 2px 2px rgba(255, 254, 254, 0.75)',
  //       'hover',
  //       ''
  //     ),
  //     new TecComponent(
  //       '9',
  //       cardId,
  //       '9',
  //       'phone',
  //       '+51931760528',
  //       '#1c3b4d',
  //       'rgba(255, 255, 255, 0.929)',
  //       // 'Arial',
  //       'italic',
  //       'hover',
  //       ''
  //     ),
  //     new TecComponent(
  //       '10',
  //       cardId,
  //       '10',
  //       'website',
  //       'www.minkatec.com',
  //       '#1c3b4d',
  //       'rgba(255, 255, 255, 0.929)',
  //       // 'Arial',
  //       'italic',
  //       'hover',
  //       ''
  //     ),
  //     new TecComponent(
  //       '11',
  //       cardId,
  //       '11',
  //       'youtube',
  //       'https://www.youtube.com/',
  //       '#1c3b4d',
  //       'rgba(255, 255, 255, 0.929)',
  //       // 'Arial',
  //       'italic',
  //       'hover',
  //       ''
  //     ),
  //     new TecComponent(
  //       '12',
  //       cardId,
  //       '12',
  //       'email',
  //       'alex@gmail.com',
  //       '#1c3b4d',
  //       'rgba(255, 255, 255, 0.929)',
  //       // 'Arial',
  //       'italic',
  //       'hover',
  //       ''
  //     ),

  //     // new TecComponent(
  //     //   '2',
  //     //   cardId,
  //     //   '2',
  //     //   'Alexander Figueredo',
  //     //   'bold',
  //     //   '28px',
  //     //   '',
  //     //   ''
  //     // ),
  //   ];
  // }
}
