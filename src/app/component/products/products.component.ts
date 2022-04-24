import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.scroll.scrollToPosition([0,0]);
    this.router.events.subscribe((event) => {
      document.body.classList.remove('nb-theme');
    });
  }

}
