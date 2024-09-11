import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TecCard } from '../../../models/client';

@Component({
  selector: 'app-spotify',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spotify.component.html',
  styleUrl: './spotify.component.css',
})
export class SpotifyComponent implements OnInit {
  @Input() clientCard: TecCard | any;
  @Input() spotify: any;

  // public phone?: string;
  public color?: string;
  public backgroundColor?: string;
  public fontFamily?: string;
  public boxShadowHover?: string;
  public forma?: string 

  ngOnInit(): void {
    this.forma = this.clientCard.avatarStyle
    // this.phone = this.phone;
    this.fontFamily = this.clientCard.fontFamily;
    this.color = this.clientCard.colorFontButtons;
    this.backgroundColor = this.clientCard.colorButtons;
    this.boxShadowHover = this.clientCard.hoverButtons;
  }
}
