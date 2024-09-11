import { ComponentService } from '../../services/component.service';
import { CardService } from '../../services/card.service';
import { Component, inject, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecCard, TecComponent, Client } from '../../models/client';
import { SocialbtnComponent } from '../../component/socialbtn/socialbtn.component';
import {
  ActivatedRoute,
  Router,
  ActivatedRouteSnapshot,
  Params,
} from '@angular/router';
import { AvatarComponent } from '../../component/headerCard/avatar/avatar.component';
import { TitleComponent } from '../../component/headerCard/title/title.component';
import { DescriptionComponent } from '../../component/headerCard/description/description.component';
import { PhoneComponent } from '../../component/linksContact/phone/phone.component';
import { YoutubeComponent } from '../../component/linksContact/youtube/youtube.component';
import { WebsiteComponent } from '../../component/linksContact/website/website.component';
import { EmailComponent } from '../../component/linksContact/email/email.component';
// import { ClientsService } from '../../services/clients.service';
import { map } from 'rxjs';
import { SpotifyComponent } from '../../component/linksContact/spotify/spotify.component';
import { TwitchComponent } from '../../component/linksContact/twitch/twitch.component';
import { MapComponent } from '../../component/linksContact/map/map.component';
import { MyFileComponent } from '../../component/linksContact/my-file/my-file.component';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    AvatarComponent,
    TitleComponent,
    DescriptionComponent,
    PhoneComponent,
    YoutubeComponent,
    WebsiteComponent,
    EmailComponent,
    SocialbtnComponent,
    SpotifyComponent,
    TwitchComponent,
    MapComponent,
    MyFileComponent,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardModel1Component implements OnInit {
  public router = inject(Router);
  public activateRouter = inject(ActivatedRoute);
  public CardService = inject(CardService);
  public ClientsService = inject(ClientsService);

  public clientCard?: TecCard;
  public PropertyClient?: any;
  public propertyClientFilter: any = [];
  public img?: any;
  public userName?: string;

  // ngOnInit(): void {
  //   // trae el card del usuario con el idCard que nos trae por parametro desde el componentes clientes
  //   this.userName = this.activateRouter.snapshot.params['userName'];
  //   console.log(this.userName);
  //   const idCard = this.activateRouter.snapshot.params['idCard'];
  //   this.CardService.getOneClientCard(idCard).subscribe((data) => {
  //     this.clientCard = data;

  //     // trae el usuario desde el componentes clientes
  //     this.PropertyClient = this.CardService.getUser();
  //     // console.log(this.PropertyClient);

  //     Object.keys(this.PropertyClient).map((key) => {
  //       const value = this.PropertyClient[key];
  //       // console.log(`Key: ${key}, Value: ${value}`);

  //       // filtrar los valores vacios hace push del objeto con todas sus propiedades ya filtradas al array propertyClientFilter
  //       if (value !== '') {
  //         // propertyClientFilter.push({ ...propertyClientFilter, [key]: value });
  //         this.propertyClientFilter.push({ [key]: value });
  //       }
  //     });
  //     // console.log(this.propertyClientFilter);

  //     this.ngOnInit2()

  //   });
  // }

  ngOnInit(): void {
    let idCard = '';
    this.userName = this.activateRouter.snapshot.params['userName'];

    if (this.userName) {
      this.ClientsService.getOneClient(this.userName || '').subscribe(
        (data) => {
          // trae el usuario y sus propiedades desde el bakend
          this.PropertyClient = data;
          //setea el idCard
          idCard = data.idCard;

          // trae el card del usuario con el idCard que pasamos por parametro
          this.CardService.getOneClientCard(idCard).subscribe((data) => {
            this.clientCard = data;

            // recorre el objeto con todas sus propiedades
            Object.keys(this.PropertyClient).map((key) => {
              const value = this.PropertyClient[key];
              // console.log(`Key: ${key}, Value: ${value}`);

              // filtrar los valores vacios hace push del objeto con todas sus propiedades ya filtradas al array propertyClientFilter
              if (value !== '') {
                // propertyClientFilter.push({ ...propertyClientFilter, [key]: value });
                this.propertyClientFilter.push({ [key]: value });
              }
            });
          });
        }
      );
    }
  }
}
