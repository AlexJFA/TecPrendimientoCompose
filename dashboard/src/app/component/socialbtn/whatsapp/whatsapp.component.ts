import { Component, Input, OnInit } from '@angular/core';
import { TecCard, TecComponent } from '../../../models/client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.css',
})
export class WhatsappComponent implements OnInit {
  // @Input() allComponents: TecComponent | any;
  // @Input() PropertyClient: any;
  @Input() clientCard: TecCard | any;
  @Input() whatsapp: any;

  
  public phone?: string;
  public color?: string;
  public backgroundColor?: string;
  public boxShadow?: string;
  public boxShadowHover?: string;
  public forma?: string 

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  

    // let whatsappProperties = this.allComponents.find(
    //   (Component: any) => Component.type === 'whatsapp'
    // );
    // console.log(this.PropertyClient);
    this.forma = this.clientCard.avatarStyle;
    this.phone = this.whatsapp;
    // this.phone = this.PropertyClient.phone;
    this.color = this.clientCard.colorFontButtons
    this.backgroundColor = this.clientCard.colorButtons
    this.boxShadowHover = this.clientCard.hoverButtons


    // this.phone = whatsappProperties.prop_one;
    // this.color = whatsappProperties.prop_two;
    // this.backgroundColor = whatsappProperties.prop_tree;
    // this.boxShadow = whatsappProperties.prop_four;
    // this.boxShadowHover = whatsappProperties.prop_five;

  }
}
