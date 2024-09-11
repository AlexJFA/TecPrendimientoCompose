import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariableBinding } from '@angular/compiler';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css',
})
export class DescriptionComponent implements OnInit {
  // @Input() allComponents: any;
  // @Input() PropertyClient: any;
  @Input() clientCard: any;
  @Input() description: any;

  // public description?: string;
  public fontFamily?: string;
  public fontSize?: string;
  public color?: string;

  ngOnInit(): void {
    // let descriptionProperties = this.allComponents.find(
    //   (component: any) => component.type === 'description'
    // );


    // console.log(this.clientCard);
    // console.log(this.fontFamily);


    // this.description = this.PropertyClient.description;
    this.fontFamily = this.clientCard.fontFamily;
    this.color = this.clientCard.colorDescription;
    this.fontSize = this.clientCard.fontSizeDescription;

   


    // this.description = descriptionProperties.prop_one;
    // this.fontStyle = descriptionProperties.prop_two;
    // this.fontSize = descriptionProperties.prop_tree;
    // this.color = descriptionProperties.prop_four;

  }
}
