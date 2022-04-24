import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-f-problems',
  templateUrl: './f-problems.component.html',
  styleUrls: ['./f-problems.component.scss']
})
export class FProblemsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      document.body.classList.remove('nb-theme');
    });
  }

}
