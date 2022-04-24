import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticsRoutingModule } from './statics-routing.module';
import { StaticsComponent } from './statics.component';
import { SubStaticsComponent } from './components/sub-statics/sub-statics.component';
import {MatButtonModule} from "@angular/material/button";
import {NgChartsModule} from "ng2-charts";
import {NgCircleProgressModule} from "ng-circle-progress";
import { SubSstaticsComponent } from './components/sub-sstatics/sub-sstatics.component';


@NgModule({
  declarations: [
    StaticsComponent,
    SubStaticsComponent,
    SubSstaticsComponent
  ],
  imports: [
    CommonModule,
    StaticsRoutingModule,
    MatButtonModule,
    NgChartsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
  ]
})
export class StaticsModule { }
