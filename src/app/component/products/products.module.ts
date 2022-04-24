import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SubProductsComponent } from './components/sub-products/sub-products.component';
import {MatButtonModule} from "@angular/material/button";
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";



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
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule
    ]
})
export class ProductsModule { }
