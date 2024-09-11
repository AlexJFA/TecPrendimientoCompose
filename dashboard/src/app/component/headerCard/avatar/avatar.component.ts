import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecCard } from '../../../models/client';
import { map, first } from 'rxjs';
import { CardService } from '../../../services/card.service';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css',
})
export class AvatarComponent implements OnInit {
  // @Input() allComponents: any;
  // @Input() PropertyClient: any;
  @Input() clientCard: any;
  @Input() avatar: any;
  // @Input() lastName: any;

  public src?: string;
  public forma?: string;

  private CardService = inject(CardService);
  ngOnInit() {
    // let avatarProperties = this.allComponents.find(
    //   (component: any) => component.type === 'avatar'
    // );

    this.src = `http://api.tecprendimiento.com/uploads/${this.avatar[2].firtsName}_${this.avatar[3].lastName}.jpg`;
    // this.src = `http://api.tecprendimiento.com/uploads/${this.PropertyClient.firtsName}_${this.PropertyClient.lastName}.jpg`;

    this.forma = this.clientCard.avatarStyle;

    // this.src = avatarProperties.prop_one;
    // this.forma = avatarProperties.prop_two;
  }
}
