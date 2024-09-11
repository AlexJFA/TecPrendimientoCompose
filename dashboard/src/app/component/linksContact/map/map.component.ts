import { Component, Input, OnInit } from '@angular/core';
import { TecCard } from '../../../models/client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  @Input() clientCard: TecCard | any;
  @Input() map: any;

  // public email?: string;
  public color?: string;
  public backgroundColor?: string;
  public fontFamily?: string;
  public boxShadowHover?: string;
  public forma?: string;

  ngOnInit(): void {
    this.map = this.map;
    this.forma = this.clientCard.avatarStyle;
    this.fontFamily = this.clientCard.fontFamily;
    this.color = this.clientCard.colorFontButtons;
    this.backgroundColor = this.clientCard.colorButtons;
    this.boxShadowHover = this.clientCard.hoverButtons;
  }

}
