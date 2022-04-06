import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-fproblems',
  templateUrl: './sub-fproblems.component.html',
  styleUrls: ['./sub-fproblems.component.scss']
})
export class SubFproblemsComponent implements OnInit {

   fieldArray: Array<any> = [];
   newAttribute: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
    console.log(this.fieldArray);
  }

  deleteFieldValue(index: any) {
    this.fieldArray.splice(index, 1);
  }

}
