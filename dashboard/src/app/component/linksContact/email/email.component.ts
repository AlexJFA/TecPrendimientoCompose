import { Component, Input, OnInit } from '@angular/core';
import { TecCard, TecComponent } from '../../../models/client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css',
})
export class EmailComponent implements OnInit {
  @Input() clientCard: TecCard | any;
  @Input() email: any;

  // public email?: string;
  public color?: string;
  public backgroundColor?: string;
  public fontFamily?: string;
  public boxShadowHover?: string;
  public forma?: string;

  ngOnInit(): void {
    this.forma = this.clientCard.avatarStyle;
    this.email = this.email;
    this.fontFamily = this.clientCard.fontFamily;
    this.color = this.clientCard.colorFontButtons;
    this.backgroundColor = this.clientCard.colorButtons;
    this.boxShadowHover = this.clientCard.hoverButtons;
  }
}
