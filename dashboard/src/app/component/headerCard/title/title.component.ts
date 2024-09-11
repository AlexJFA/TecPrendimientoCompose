import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { first } from 'rxjs';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent implements OnInit {
  // @Input() allComponents: any;
  // @Input() PropertyClient: any;
  @Input() clientCard: any;
  @Input() title: any;

  // public title?: string;
  public fontStyle?: string;
  public fontSize?: string;
  public color?: string;

  ngOnInit(): void {
    // let titleProperties = this.allComponents.find(
    //   (component: any) => component.type === 'title'
    // );


    
    this.title = this.title[2].firtsName + ' ' + this.title[3].lastName;
    // this.title = this.PropertyClient.firtsName + ' ' + this.PropertyClient.lastName;
    this.fontStyle = this.clientCard.fontFamily;
    this.color = this.clientCard.colorTitle;
    this.fontSize = this.clientCard.fontSizeTitle;

    // this.title = titleProperties.prop_one;
    // this.fontStyle = titleProperties.prop_two;
    // this.fontSize = titleProperties.prop_tree;
    // this.color = titleProperties.prop_four;

  }
}
