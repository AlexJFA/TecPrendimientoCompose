import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// Import Slick carousel module
import { SlickCarouselModule } from 'ngx-slick-carousel';

/**
 * Component for displaying services.
 */
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [SlickCarouselModule, NgStyle],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit {
  //Variables products Headboard-------------------------------
  public nfContactStyle: Record<string, string> = {};
  public systemNotikStyle: Record<string, string> = {};
  public automatitationIAStyle: Record<string, string> = {};
  public consultingIAStyle: Record<string, string> = {};
  public sofwareWebStyle: Record<string, string> = {};

  public nfContact: boolean = true;
  public systemNotik: boolean = false;
  public automatitationIA: boolean = false;
  public consultingIA: boolean = false;
  public sofwareWeb: boolean = false;

  // First carousel -------------------------------

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
  ];

  // Slick carousel configuration

  /**
   * Configuration options for the first carousel.
   */
  public slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    slickPlay: true,
    autoplay: false,
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
          autoplay: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Second carousel -------------------------------

  /**
   * Array of slides for the second carousel.
   */
  public slides2 = [
    { img: '../../../assets/images/Logos/logo3.png' },
    { img: '../../../assets/images/Logos/HIAS.png' },
    { img: '../../../assets/images/Logos/tanira.png' },
    { img: '../../../assets/images/Logos/frank-Adam.png' },
    { img: '../../../assets/images/Logos/logo aszero .png' },
    { img: '../../../assets/images/Logos/denaro.png' },
  ];

  // Slick carousel configuration

  /**
   * Configuration options for the second carousel.
   */
  public slideConfig2 = {
    slidesToShow: 5,
    slidesToScroll: 1,
    slickPlay: true,
    autoplay: false,
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
          autoplay: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  ngOnInit(): void {
    this.setCurrentStyles();
  }

  // products Headboard -------------------------------

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.nfContactStyle = {
      'background-color': this.nfContact ? '#222222' : '#575757',
    };

    this.systemNotikStyle = {
      'background-color': this.systemNotik ? '#222222' : '#575757',
    };

    this.automatitationIAStyle = {
      'background-color': this.automatitationIA ? '#222222' : '#575757',
    };

    this.consultingIAStyle = {
      'background-color': this.consultingIA ? '#222222' : '#575757',
    };

    this.sofwareWebStyle = {
      'background-color': this.sofwareWeb ? '#222222' : '#575757',
    };
  }
}
