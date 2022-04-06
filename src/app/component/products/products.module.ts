import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SubProductsComponent } from './components/sub-products/sub-products.component';
import {MatButtonModule} from "@angular/material/button";
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    ProductsComponent,
    SubProductsComponent,
    ProductDetailComponent
  ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        MatButtonModule,
        MatDialogModule
    ]
})
export class ProductsModule { }
