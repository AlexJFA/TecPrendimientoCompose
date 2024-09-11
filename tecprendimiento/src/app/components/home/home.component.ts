import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private _router: Router) {}

  redirectServices() {
    this._router.navigateByUrl('/services');
  }

  redirectFQA(){
    this._router.navigateByUrl('/fqa');
  }

  /**
   * Array of slides for the first carousel.
   */
  public slides = [
    { img: '../../../assets/images/Logos/Lunika.png' },
    { img: '../../../assets/images/Logos/OdontoMigue.png' },
    { img: '../../../assets/images/Logos/Alactus.png' },
    { img: '../../../assets/images/Logos/Agathos .png' },
    { img: '../../../assets/images/Logos/ms-consulting.png' },
    { img: '../../../assets/images/Logos/frank-Adam.png' },
    { img: '../../../assets/images/Logos/denaro.png' },
    { img: '../../../assets/images/Logos/HIAS.png' },
    { img: '../../../assets/images/Logos/logo aszero .png' },
    { img: '../../../assets/images/Logos/logo.png' },
    { img: '../../../assets/images/Logos/tanira.png' },
  ];

  // Slick carousel configuration

  /**
   * Configuration options for the first carousel.
   */
  public slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    slickPlay: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
}
