import { Component, Input, OnInit } from '@angular/core';
import { TecCard } from '../../../models/client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-file',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-file.component.html',
  styleUrl: './my-file.component.css'
})
export class MyFileComponent implements OnInit  {
    @Input() clientCard: TecCard | any;
    @Input() myfile: any;
  
    // public email?: string;
    public color?: string;
    public backgroundColor?: string;
    public fontFamily?: string;
    public boxShadowHover?: string;
    public forma?: string;
  
    ngOnInit(): void {
      this.myfile = this.myfile;
      this.forma = this.clientCard.avatarStyle;
      this.fontFamily = this.clientCard.fontFamily;
      this.color = this.clientCard.colorFontButtons;
      this.backgroundColor = this.clientCard.colorButtons;
      this.boxShadowHover = this.clientCard.hoverButtons;
    }

}
