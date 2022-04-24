import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productname: any;
  productdesc:any;
  product_imgs:any;
  Price:any;
  seller:any;
  contact:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog,
              public dialogRef: MatDialogRef<ProductDetailComponent>,
              private _snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
    // this.scroll.scrollToPosition([0,0]);
    console.log("this is data")
    console.log(this.data)
    this.valueAdding();
    this.router.events.subscribe((event) => {
      document.body.classList.remove('nb-theme-default');
    });
  }

  valueAdding(){
    this.productname = this.data.product_title;
    this.productdesc = this.data.product_desc;
    this.product_imgs = this.data.product_img;
    this.Price = this.data.product_price;
    this.seller = this.data.farmer_name;
    this.contact = this.data.farmer_contact;
  }

  onNoClick(): void {
    this.dialogRef.close();
    // const approval4 = this.dialog.open(DialogsComponent, {
    //   width: '350px',
    //   data: new ApprovalDialogConfig('Error', 'UnSuccessful', 'Item '+this.data.category_name+' Is Not Updated')
    // });
    // approval4.afterClosed().subscribe(approve => {
    //   if (approve) {
    //     console.log('Item '+this.data.category_name+' Is Not Updated');
    //   }
    // });
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  openSnackBar(){
    this._snackBar.open('Request Successfully Sent!!', 'ok',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['green-snackbar', 'login-snackbar']
    });
  }

  Requsetsent() {
    this.dialogRef.close();
    this.openSnackBar();
  }
}
