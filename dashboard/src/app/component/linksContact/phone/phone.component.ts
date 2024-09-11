import { Component, Input, OnInit } from '@angular/core';
import { TecCard, TecComponent } from '../../../models/client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css',
})
export class PhoneComponent implements OnInit {
  // @Input() allComponents: TecComponent | any;
  // @Input() PropertyClient: any;
  @Input() clientCard: TecCard | any;
  @Input() phone: any;
  
  public forma?: string 
  // public phone?: string;
  public color?: string;
  public backgroundColor?: string;
  public fontFamily?: string;
  public boxShadowHover?: string;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // let phoneProperties = this.allComponents.find(
    //   (Component: any) => Component.type === 'phone'
    // );

    this.forma = this.clientCard.avatarStyle
    this.fontFamily = this.clientCard.fontFamily;
    this.color = this.clientCard.colorFontButtons
    this.backgroundColor = this.clientCard.colorButtons
    this.boxShadowHover = this.clientCard.hoverButtons

    // this.phone = phoneProperties.prop_one;
    // this.color = phoneProperties.prop_two;
    // this.backgroundColor = phoneProperties.prop_tree;
    // this.fontFamily = phoneProperties.prop_four;
    // this.boxShadowHover = phoneProperties.prop_five;

  }
}
