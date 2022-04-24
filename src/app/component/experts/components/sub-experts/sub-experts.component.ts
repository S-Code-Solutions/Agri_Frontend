import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {SubExpertsService} from "../../services/sub-experts.service";

@Component({
  selector: 'app-sub-experts',
  templateUrl: './sub-experts.component.html',
  styleUrls: ['./sub-experts.component.scss']
})
export class SubExpertsComponent implements OnInit {


  private allComponentsSub3!: Subscription;
  panelOpenState = false;
  serviceExperts! :any[];

  constructor(private subExpertsService:SubExpertsService) { }

  ngOnInit(): void {
    this.GetAllExperts()
  }

  GetAllExperts(){
    this.allComponentsSub3 = this.subExpertsService.getExpertDetails().subscribe(result => {
      console.log(result)
      this.serviceExperts = result.data;

    }, error => {
      console.log(error);
    });
  }

}
