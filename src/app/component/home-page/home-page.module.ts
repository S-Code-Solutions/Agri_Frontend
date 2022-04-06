import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { HomeSubComponent } from './components/home-sub/home-sub.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    HomePageComponent,
    HomeSubComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    CarouselModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class HomePageModule { }
