import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertsRoutingModule } from './experts-routing.module';
import { ExpertsComponent } from './experts.component';
import { SubExpertsComponent } from './components/sub-experts/sub-experts.component';
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    ExpertsComponent,
    SubExpertsComponent
  ],
  imports: [
    CommonModule,
    ExpertsRoutingModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule
  ]
})
export class ExpertsModule { }
