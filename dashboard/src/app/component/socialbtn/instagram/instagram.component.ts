import { Component, Input, OnInit } from '@angular/core';
import { TecCard, TecComponent } from '../../../models/client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instagram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram.component.html',
  styleUrl: './instagram.component.css',
})
export class InstagramComponent implements OnInit {
  // @Input() allComponents: TecComponent | any;
  // @Input() PropertyClient: any;
  @Input() clientCard: TecCard | any;
  @Input() instagram: any;

  public url?: string;
  public color?: string;
  public backgroundColor?: string;
  public boxShadow?: string;
  public boxShadowHover?: string;
  public forma?: string 

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // let instagramProperties = this.allComponents.find(
    //   (Component: any) => Component.type === 'instagram'
    // );

    // console.log(this.PropertyClient);
    this.forma = this.clientCard.avatarStyle
    this.url = this.instagram;
    // this.url = this.PropertyClient.instagram;
    this.color = this.clientCard.colorFontButtons
    this.backgroundColor = this.clientCard.colorButtons
    this.boxShadowHover = this.clientCard.hoverButtons


    // this.url = instagramProperties.prop_one;
    // this.color = instagramProperties.prop_two;
    // this.backgroundColor = instagramProperties.prop_tree;
    // this.boxShadow = instagramProperties.prop_four;
    // this.boxShadowHover = instagramProperties.prop_five;

  }
}
