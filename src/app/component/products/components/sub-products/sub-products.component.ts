import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ProductDetailComponent} from "../product-detail/product-detail.component";


@Component({
  selector: 'app-sub-products',
  templateUrl: './sub-products.component.html',
  styleUrls: ['./sub-products.component.scss']
})
export class SubProductsComponent implements OnInit {

  memberImages! :any[];

  constructor(private pproductsservice:ProductsService,
              public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.mmemberSlider()
  }

  mmemberSlider(){
    this.memberImages = this.pproductsservice.getProductDetails().productStore
  }

  updateItem(row: any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = row;
    // dialogConfig.width = 'auto';
    // dialogConfig.height = 'auto';
    console.log(row);
    console.log('----------------------------');
    const dialogRef = this.dialog.open(ProductDetailComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log("response code1")
      console.log(result)
      console.log("response code2")
    });
  }

}
