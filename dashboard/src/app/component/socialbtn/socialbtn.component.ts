import { Component, Input, OnInit } from '@angular/core';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { FacebookComponent } from './facebook/facebook.component';
import { InstagramComponent } from './instagram/instagram.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { TwitterXComponent } from './twitter-x/twitter-x.component';
import { TecCard, TecComponent } from '../../models/client';
import { TiktokComponent } from './tiktok/tiktok.component';

@Component({
  selector: 'app-socialbtn',
  standalone: true,
  imports: [
    WhatsappComponent,
    FacebookComponent,
    InstagramComponent,
    LinkedinComponent,
    TwitterXComponent,
    TiktokComponent
  ],
  templateUrl: './socialbtn.component.html',
  styleUrl: './socialbtn.component.css',
})
export class SocialbtnComponent implements OnInit {
  // @Input() allComponents: TecComponent | any;
  // @Input() PropertyClient: any;
  @Input() clientCard: TecCard | any;
  @Input() btnComponents: any;

  public whatsapp?: string;
  public linkedin?: string;
  public facebook?: string;
  public instagram?: string;
  public x?: string;
  public tiktok?: string;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // this.whatsapp = this.btnComponents[7].phone;

    // recorremos el objeto btnComponents y obtenemos el valor de cada componente
    Object.keys(this.btnComponents).forEach((key) => {
      const value = this.btnComponents[key];
      // console.log(key);
      if (value.phone) {
        this.whatsapp = value.phone;
      }

      if (value.linkedin) {
        this.linkedin = value.linkedin;
      }

      if (value.facebook) {
        this.facebook = value.facebook;
      }

      if (value.instagram) {
        this.instagram = value.instagram;
      }

      if (value.x) {
        this.x = value.x;
      }
      if (value.tiktok) {
        this.tiktok = value.tiktok;
      }

    });

    // console.log(this.whatsapp, this.linkedin, this.facebook, this.instagram, this.twitter_x);
    // console.log(this.btnComponents);

    // this.whatsapp = this.allComponents.find(
    //   (Component: any) => Component.type === 'whatsapp'
    // )

    // this.linkedin = this.allComponents.find(
    //   (Component: any) => Component.type === 'linkedin'
    // )

    // this.facebook = this.allComponents.find(
    //   (Component: any) => Component.type === 'facebook'
    // )

    // this.instagram = this.allComponents.find(
    //   (Component: any) => Component.type === 'instagram'
    // )

    // this.twitter_x = this.allComponents.find(
    //   (Component: any) => Component.type === 'twitter-x'
    // ).prop_one;

    // this.whatsapp = this.allComponents.find(
    //   (Component: any) => Component.type === 'whatsapp'
    // ).prop_one;

    // this.linkedin = this.allComponents.find(
    //   (Component: any) => Component.type === 'linkedin'
    // ).prop_one;

    // this.facebook = this.allComponents.find(
    //   (Component: any) => Component.type === 'facebook'
    // ).prop_one;

    // this.instagram = this.allComponents.find(
    //   (Component: any) => Component.type === 'instagram'
    // ).prop_one;

    // this.twitter_x = this.allComponents.find(
    //   (Component: any) => Component.type === 'twitter-x'
    // ).prop_one;
  }
}
