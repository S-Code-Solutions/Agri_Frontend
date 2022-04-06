import { Component, OnInit } from '@angular/core';
import { faHandshake, faHeadset, faTractor, faBuildingWheat,faBasketShopping,faCheckCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  faBasketShopping = faBasketShopping;
  faBuildingWheat= faBuildingWheat;
  faHandshake=faHandshake;
  faHeadset=faHeadset;
  faCheckCircle=faCheckCircle;
  faTractor=faTractor;

  constructor() { }

  ngOnInit(): void {
  }

}
