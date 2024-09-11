import { Component, Input, OnInit } from '@angular/core';
import { TecCard, TecComponent } from '../../../models/client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facebook',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facebook.component.html',
  styleUrl: './facebook.component.css',
})
export class FacebookComponent implements OnInit {
  // @Input() allComponents: TecComponent | any;
  // @Input() PropertyClient: any;
  @Input() clientCard: TecCard | any;
  @Input() facebook : TecCard | any;

  public url?: string;
  public color?: string;
  public backgroundColor?: string;
  public boxShadow?: string;
  public boxShadowHover?: string;
  public forma?: string 

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // let facebookProperties = this.allComponents.find(
    //   (Component: any) => Component.type === 'facebook'
    // );

    this.forma = this.clientCard.avatarStyle
     this.url = this.facebook;
    //  this.url = this.PropertyClient.facebook;
     this.color = this.clientCard.colorFontButtons
     this.backgroundColor = this.clientCard.colorButtons
     this.boxShadowHover = this.clientCard.hoverButtons

    // this.url = facebookProperties.prop_one;
    
    // this.color = facebookProperties.prop_two;
    // this.backgroundColor = facebookProperties.prop_tree;
    // this.boxShadow = facebookProperties.prop_four;
    // this.boxShadowHover = facebookProperties.prop_five;

  }
}
