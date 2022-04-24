import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router, RouterOutlet} from "@angular/router";
import {slider} from "./route-animations";
import {AnimeService} from "./services/anime.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // trigger('slideInOut', [
    //   state('true', style({
    //   })),
    //   state('false', style({
    //     width: '0px',
    //   })),
    //   transition('true => false', animate('500ms')),
    //   transition('false => true', animate('500ms'))
    // ]),
    slider
  ]
})
export class AppComponent implements OnInit{
  title = 'agriSystem';

  showHead: boolean = false;
  // outlet!: RouterOutlet;
  showAnime= false;

  constructor(private router: Router,
              private animeService:AnimeService) {
    // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/authentication/expertlogin') {
          this.showHead = false;

        } else if(event['url'] == '/authentication/farmerlogin') {
          // console.log("NU")
          this.showHead = false;

        }else{
          this.showHead = true;
        }
      }
    });


  }
  getRouteAnimationData(oulet: RouterOutlet) {
    return oulet && oulet.activatedRouteData && oulet.activatedRouteData['animation'];
  }


  ngOnInit(): void {
this.getAnime()
  }

  getAnime(){
    this.showAnime = true
    this.animeService.getProductDetails().subscribe(res=>{
      this.showAnime = true
      if (res!=null){
        this.showAnime = false
        console.log("res not null")
      }
    })
  }
}
