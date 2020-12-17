import { Component, ViewChild, OnInit } from '@angular/core';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';
import { PaginationOptions } from 'swiper/types/components/pagination';
import { ScrollbarOptions } from 'swiper/types/components/scrollbar';
import { NavigationOptions } from 'swiper/types/components/navigation';

const slides = [
  {
    preview: 'img-carousel-book-2.jpg',
    descr: 'Bestselling writer Daniel Abraham and acclaimed illustrator Tommy Patterson bring their stunning graphic-novel',
    link: '#'
  },
  {
    preview: 'img-carousel-book-3.jpg',
    descr: 'Bestselling writer Daniel Abraham and acclaimed illustrator Tommy Patterson bring their stunning graphic-novel',
    link: '#'
  },
  {
    preview: 'img-carousel-book-4.jpg',
    descr: 'Bestselling writer Daniel Abraham and acclaimed illustrator Tommy Patterson bring their stunning graphic-novel',
    link: '#'
  },
  {
    preview: 'img-carousel-book-1.jpg',
    descr: 'Bestselling writer Daniel Abraham and acclaimed illustrator Tommy Patterson bring their stunning graphic-novel',
    link: '#'
  },
  {
    preview: 'img-carousel-book-5.jpg',
    descr: 'Bestselling writer Daniel Abraham and acclaimed illustrator Tommy Patterson bring their stunning graphic-novel',
    link: '#'
  },
  {
    preview: 'img-carousel-book-1.jpg',
    descr: 'Bestselling writer Daniel Abraham and acclaimed illustrator Tommy Patterson bring their stunning graphic-novel',
    link: '#'
  },
  {
    preview: 'img-carousel-book-2.jpg',
    descr: 'Bestselling writer Daniel Abraham and acclaimed illustrator Tommy Patterson bring their stunning graphic-novel',
    link: '#'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public show = true;
  public slides = slides;
  public type = 'component';
  public disabled = false;
  private windowWidth = document.querySelector('body').offsetWidth;
  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 20,
    centeredSlides: false,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: false,
    autoHeight: true
  };
  private scrollbar: ScrollbarOptions = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };
  private pagination: PaginationOptions = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  // private navigation: NavigationOptions = {
  //   prevEl: '.custom-button-prev',
  //   nextEl: '.custom-button-next'
  // };

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  constructor() {}

  ngOnInit(): void {
    if (this.windowWidth < 768) {
      this.config.slidesPerView = 2;
      // this.config.slidesPerView = 3;
    } else if (this.windowWidth > 768 && this.windowWidth < 1024) {
      this.config.slidesPerView = 3;
      // this.config.slidesPerView = 3;
    }
    console.log('hello');
  }

  public toggleType(): void {
    this.type = (this.type === 'component') ? 'directive' : 'component';
  }

  public toggleOverlayControls(): void {
    if (this.config.navigation) {
      this.config.scrollbar = false;
      // this.config.navigation = this.navigation;
      this.config.pagination = this.pagination;
    } else if (this.config.pagination) {
      this.config.navigation = false;
      this.config.pagination = false;

      this.config.scrollbar = this.scrollbar;
    } else {
      this.config.scrollbar = false;
      this.config.pagination = false;

      this.config.navigation = true;
    }

    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.setIndex(0);
    } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.setIndex(0);
    }
  }

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
    console.log(this.windowWidth);
  }
}

