import { Component, Input, OnInit } from '@angular/core';
import { TecCard, TecComponent } from '../../../models/client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-linkedin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './linkedin.component.html',
  styleUrl: './linkedin.component.css',
})
export class LinkedinComponent implements OnInit {
  // @Input() allComponents: TecComponent | any;
  // @Input() PropertyClient: any;
  @Input() clientCard: TecCard | any;
  @Input() linkedin: any;

  public url?: string;
  public color?: string;
  public backgroundColor?: string;
  public boxShadow?: string;
  public boxShadowHover?: string;
  public forma?: string 

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // let linkedinProperties = this.allComponents.find(
    //   (Component: any) => Component.type === 'linkedin'
    // );
    this.forma = this.clientCard.avatarStyle
    this.url = this.linkedin;
    // this.url = this.PropertyClient.linkedin;
    this.color = this.clientCard.colorFontButtons
    this.backgroundColor = this.clientCard.colorButtons
    this.boxShadowHover = this.clientCard.hoverButtons


    // this.url = linkedinProperties.prop_one;
    // this.color = linkedinProperties.prop_two;
    // this.backgroundColor = linkedinProperties.prop_tree;
    // this.boxShadow = linkedinProperties.prop_four;
    // this.boxShadowHover = linkedinProperties.prop_five;

  
  }
}
