import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TecCard } from '../../../models/client';

@Component({
  selector: 'app-twitch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './twitch.component.html',
  styleUrl: './twitch.component.css'
})
export class TwitchComponent implements OnInit {

  @Input() clientCard: TecCard | any;
  @Input() twitch: any;

  // public phone?: string;
  public color?: string;
  public backgroundColor?: string;
  public fontFamily?: string;
  public boxShadowHover?: string;
  public forma?: string 

  ngOnInit(): void {
    // this.phone = this.phone;
    this.forma = this.clientCard.avatarStyle
    this.fontFamily = this.clientCard.fontFamily;
    this.color = this.clientCard.colorFontButtons;
    this.backgroundColor = this.clientCard.colorButtons;
    this.boxShadowHover = this.clientCard.hoverButtons;
  }

}
