import { Component, Input, OnInit } from '@angular/core';
import { TecCard } from '../../../models/client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tiktok',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tiktok.component.html',
  styleUrl: './tiktok.component.css'
})
export class TiktokComponent implements OnInit {

  @Input() clientCard: TecCard | any;
  @Input() tiktok: any;

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
    this.url = this.tiktok;
    // this.url = this.PropertyClient.linkedin;
    this.color = this.clientCard.colorFontButtons
    this.backgroundColor = this.clientCard.colorButtons
    this.boxShadowHover = this.clientCard.hoverButtons
  }
}
