import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import {MatButtonModule} from "@angular/material/button";
import { StartSectionComponent } from './components/start-section/start-section.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CategoryComponent } from './components/category/category.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CarouselModule} from "ngx-owl-carousel-o";


@NgModule({
  declarations: [
    AboutUsComponent,
    StartSectionComponent,
    GalleryComponent,
    CategoryComponent
  ],
    imports: [
        CommonModule,
        AboutUsRoutingModule,
        MatButtonModule,
        FontAwesomeModule,
        CarouselModule
    ]
})
export class AboutUsModule { }
