import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsEventsRoutingModule } from './news-events-routing.module';
import { NewsEventsComponent } from './news-events.component';
import { NewsnEventsComponent } from './components/newsn-events/newsn-events.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    NewsEventsComponent,
    NewsnEventsComponent
  ],
  imports: [
    CommonModule,
    NewsEventsRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class NewsEventsModule { }
