import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $:any;

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.css']
})
export class HomeNewsComponent implements OnInit {
//   nextSlide() {
//     const carousel = document.querySelector('.owl-carousel-o');
//     carousel?.owlNext();
//   }
// @ViewChild(OwlCarouselOComponent) carousel: OwlCarouselOComponent;
one:any={}

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    dotsData:true,
 
    navSpeed: 1000,
    margin:10,
    lazyLoad:true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    smartSpeed:500,
    navText:['<span>←</span>', '<span>→</span>'],
 
    responsive: {
      0: {
        items: 1,
 
      },
      400: {
        items: 1,

      },
      740: {
        items: 1,
  
      },
      940: {
        items: 3,
      

      }
    },
    nav: true,
    

  }

  slides = [
    { img: 'https://via.placeholder.com/600.png/09f/fff' },
    { img: 'https://via.placeholder.com/600.png/021/fff' },
    { img: 'https://via.placeholder.com/600.png/321/fff' },
    { img: 'https://via.placeholder.com/600.png/422/fff' },
    { img: 'https://via.placeholder.com/600.png/654/fff' },

  ];


  constructor() { }

  ngOnInit(): void {
  }
  prev(index:any){

    this.slides.splice(index,1)
  
  }
next(index:any){
 
}
}



