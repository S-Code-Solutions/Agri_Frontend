import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ProductDetailComponent} from "../product-detail/product-detail.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "ngx-cookie";
import {ProductDTO} from "../../dto/productDTO";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {ViewportScroller} from "@angular/common";


@Component({
  selector: 'app-sub-products',
  templateUrl: './sub-products.component.html',
  styleUrls: ['./sub-products.component.scss']
})
export class SubProductsComponent implements OnInit {

  cookieValues :any
  memberImages! :any[];
  itemDetailsForm!: FormGroup;
  FarmForm=false;
  cookieValue :any
  private allComponentsSub2!: Subscription;
  serviceProducts! :any[];

  constructor(private pproductsservice:ProductsService,
              public dialog: MatDialog,
              private cookieService: CookieService,
              private _snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
    // this.scroll.scrollToPosition([0,0]);
    this.itemDetailsForm = new FormGroup({
      product_title: new FormControl('', [
        Validators.required
      ]),
      product_desc: new FormControl('', [
        Validators.required,
      ]),
      product_price: new FormControl('', [
        Validators.required,
      ]),
      product_img: new FormControl('', [
        Validators.required,
      ]),
      fertilizer: new FormControl('', [
        Validators.required,
      ])
    });
    this.formDisable()
    this.GetAllProducts()
    this.cookieValues = JSON.parse(this.cookieService.get('Arr'));
    console.log(this.cookieValues)

    this.router.events.subscribe((event) => {
      document.body.classList.remove('nb-theme-default');
    });
  }

  options: string[] = ['Chemical', 'Natural', 'Both'];



  formDisable(){
    this.cookieValue = this.cookieService.get('User');
    if (this.cookieValue == 'Farmer'){
      this.FarmForm=true;
    }else{
      this.FarmForm=false;
    }
  }

  GetAllProducts(){
    this.allComponentsSub2 = this.pproductsservice.getProductDetails().subscribe(result => {
      console.log(result)
      this.serviceProducts = result.data;

    }, error => {
      console.log(error);
    });
  }

  updateItem(row: any): void {
    this.pproductsservice.getProductDtail(row).subscribe(res=>{
      console.log(res)
      if (res.code == '200'){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = res.data;
        const dialogRef = this.dialog.open(ProductDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
          console.log("response code1")
          console.log(result)
          console.log("response code2")
        });

      }else{
        this.openFailureSnackBar();
      }

    })

  }



  saveProduct() {
    this.pproductsservice.saveProduct(new ProductDTO(
      this.cookieValues.farmer_contact,
      this.cookieValues.farmer_name,
      this.itemDetailsForm.get('product_desc')?.value,
      this.itemDetailsForm.get('product_img')?.value,
      this.itemDetailsForm.get('product_price')?.value,
      this.itemDetailsForm.get('product_title')?.value,
      "active",
      this.itemDetailsForm.get('fertilizer')?.value,
    )).subscribe(res=>{
      console.log(res)
      if (res.code == '201'){
        this.openSnackBar();
        this.itemDetailsForm.setValue({
          product_desc:'',
          product_img:'',
          product_price :'',
          product_title:'',
          fertilizer:'',
        })
        this.GetAllProducts()

      }else{
        this.openFailureSnackBar();
      }
    })
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  openSnackBar(){
    this._snackBar.open('Product Added Successful!!', 'ok',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['green-snackbar', 'login-snackbar']
    });
  }

  openFailureSnackBar(){
    this._snackBar.open('Product Added Unsuccessful!!', 'ok',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['green-snackbar', 'login-snackbar']
    });
  }
}
