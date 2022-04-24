import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor( private scroll: ViewportScroller,private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      document.body.classList.remove('nb-theme');
    });
  }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }
}
