import { Component, Input, OnInit } from '@angular/core';
import { TecCard, TecComponent } from '../../../models/client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './website.component.html',
  styleUrl: './website.component.css',
})
export class WebsiteComponent implements OnInit {
  // @Input() allComponents: TecComponent | any;
  // @Input() PropertyClient: any;
  @Input() clientCard: TecCard | any;
  @Input() website: any;
  
  // public url?: string;
  public color?: string;
  public backgroundColor?: string;
  public fontFamily?: string;
  public boxShadowHover?: string;
  public forma?: string 

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // let websiteProperties = this.allComponents.find(
    //   (Component: any) => Component.type === 'website'
    // );



    // this.url = this.website;
    this.forma = this.clientCard.avatarStyle
    this.fontFamily = this.clientCard.fontFamily;
    this.color = this.clientCard.colorFontButtons
    this.backgroundColor = this.clientCard.colorButtons
    this.boxShadowHover = this.clientCard.hoverButtons

    // this.url = websiteProperties.prop_one;
    // this.color = websiteProperties.prop_two;
    // this.backgroundColor = websiteProperties.prop_tree;
    // this.fontFamily = websiteProperties.prop_four;
    // this.boxShadowHover = websiteProperties.prop_five;

  }
}
