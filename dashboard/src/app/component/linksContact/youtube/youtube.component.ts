import { Component, Input, OnInit } from '@angular/core';
import { TecCard, TecComponent } from '../../../models/client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './youtube.component.html',
  styleUrl: './youtube.component.css',
})
export class YoutubeComponent implements OnInit {
  // @Input() allComponents: TecComponent | any;
  // @Input() PropertyClient: any;
  @Input() clientCard: TecCard | any;
  @Input() youtube: any;
  
  public url?: string;
  public color?: string;
  public backgroundColor?: string;
  public fontFamily?: string;
  public boxShadowHover?: string;
  public forma?: string 

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // let youtubeProperties = this.allComponents.find(
    //   (Component: any) => Component.type === 'youtube'
    // );


    this.forma = this.clientCard.avatarStyle
    this.url = this.youtube
    // this.url = this.PropertyClient.youtube
    this.fontFamily = this.clientCard.fontFamily;
    this.color = this.clientCard.colorFontButtons
    this.backgroundColor = this.clientCard.colorButtons
    this.boxShadowHover = this.clientCard.hoverButtons

    // this.url = youtubeProperties.prop_one;
    // this.color = youtubeProperties.prop_two;
    // this.backgroundColor = youtubeProperties.prop_tree;
    // this.fontFamily = youtubeProperties.prop_four;
    // this.boxShadowHover = youtubeProperties.prop_five;

  }
}
