import { Component, OnInit } from '@angular/core';
import {HomeServiceService} from "../../services/home-service.service";
import {OwlOptions} from "ngx-owl-carousel-o";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-home-sub',
  templateUrl: './home-sub.component.html',
  styleUrls: ['./home-sub.component.scss'],
  // animations: [
  //   trigger('activeSlide', [
  //     state('active',
  //       style({
  //         transform: 'scale(0.9)',
  //         'border-radius' : '35px',
  //         'cursor': 'pointer',
  //         'position': 'relative',
  //         'text-align': 'center',
  //         'background-color': '#23A254',
  //         'box-shadow': '2px 2px 29px 0px #000000',
  //         // 'height': '393px',
  //         // 'width': '342px',
  //       })),
  //     state('inActive', style({
  //       transform: 'scale(0.7)',
  //       'background-color': 'transparent',
  //       'border-radius' : '14px',
  //       'cursor': 'pointer',
  //       'position': 'relative',
  //       'text-align': 'center',
  //     })),
  //     transition('active => inActive', [
  //       animate('0.5s')
  //     ]),
  //     transition('inActive => active', [
  //       animate('0.5s')
  //     ])
  //   ]),
  //   trigger('imgSlide', [
  //     state('active',
  //       style({
  //         'object-fit': 'cover',
  //         'opacity': '1',
  //       })
  //     ),
  //     state('inActive',
  //       style({
  //         'object-fit': 'cover',
  //         'opacity': '0.5',
  //         'height': '393px',
  //         'width': '342px',
  //         'border-radius': '35px'
  //       })
  //     )
  //   ]),
  //   trigger('centerSlide', [
  //     state('active',
  //       style({
  //         'cursor': 'pointer',
  //         'display': 'block',
  //         'position': 'absolute',
  //         'top': '50%',
  //         'left': '50%',
  //         'transform': 'translate(-50%, -50%)',
  //       })
  //     ),
  //     state('inActive',
  //       style({
  //         'display': 'none',
  //       })
  //     )
  //   ]),
  //   trigger('bottomSlide', [
  //     state('active',
  //       style({
  //         'display': 'none',
  //       })
  //     ),
  //     state('inActive',
  //       style({
  //         'display': 'block',
  //         'position': 'absolute',
  //         'bottom': '8px',
  //         'left': '-16px',
  //       })
  //     )
  //   ]),
  //   trigger('btnSlide', [
  //     state('active',
  //       style({
  //         'width': '200px',
  //         'background': '#ffb606',
  //         'color': 'black'
  //       })
  //     ),
  //     state('inActive',
  //       style({
  //         'width': '200px',
  //         'background': '#08903D'
  //       })
  //     )
  //   ]),
  // ]
})
export class HomeSubComponent implements OnInit {

  slidesStore!: any[];
  eventImages! :any[];
  newsImages! :any[];

  constructor(private  homeservice:HomeServiceService,
              private scroll: ViewportScroller) {

  }

  ngOnInit(): void {
    this.startSlider();
    this.eventSlider();
    this.newsSlider();

  }
  startSlider(){
    this.slidesStore = this.homeservice.getStartDetails().slidesStore
    for(let i = 0;i<this.slidesStore.length;i++) {
      console.log(this.slidesStore[i])
    }
  }

  eventSlider(){
    this.eventImages = this.homeservice.getEventDetails().eventStore
  }

  newsSlider(){
    this.newsImages = this.homeservice.getNewsDetails().newsStore
  }

  advertisementsOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 3
      },
      740: {
        items: 2
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  customOptions4: OwlOptions = {
    stagePadding: 65,
    margin:98,
    autoplay: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: false
  }


  customOptions3: OwlOptions = {
    stagePadding: 60,
    margin:100,
    autoplay: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: false
  }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }

}
