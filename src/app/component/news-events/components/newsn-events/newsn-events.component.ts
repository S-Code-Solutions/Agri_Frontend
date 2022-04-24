import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-newsn-events',
  templateUrl: './newsn-events.component.html',
  styleUrls: ['./newsn-events.component.scss']
})
export class NewsnEventsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      document.body.classList.remove('nb-theme-default');
    });
  }

}
