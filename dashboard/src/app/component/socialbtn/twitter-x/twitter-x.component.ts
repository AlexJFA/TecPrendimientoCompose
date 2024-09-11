import { Component, Input, OnInit } from '@angular/core';
import { TecCard, TecComponent } from '../../../models/client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-twitter-x',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './twitter-x.component.html',
  styleUrl: './twitter-x.component.css'
})
export class TwitterXComponent implements OnInit{

  // @Input() allComponents: TecComponent | any;
  // @Input() PropertyClient: any;
  @Input() clientCard: TecCard | any;
  @Input() x:  any;

  public url?: string;
  public color?: string;
  public backgroundColor?: string;
  public boxShadow?: string;
  public boxShadowHover?: string;
  public forma?: string 


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // let twitterProperties = this.allComponents.find(
    //   (Component: any) => Component.type === 'twitter-x'
    // );
    // console.log(this.clientCard);
    // console.log(this.clientCard.avatarStyle);

    this.forma = this.clientCard.avatarStyle;
    this.url = this.x;
    this.color = this.clientCard.colorFontButtons
    this.backgroundColor = this.clientCard.colorButtons
    this.boxShadowHover = this.clientCard.hoverButtons

    // this.url = this.PropertyClient.twitter_x;

    // this.url = twitterProperties.prop_one;
    // this.color = twitterProperties.prop_two;
    // this.backgroundColor = twitterProperties.prop_tree;
    // this.boxShadow = twitterProperties.prop_four;
    // this.boxShadowHover = twitterProperties.prop_five;


    
  }

}
