import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog,
              public dialogRef: MatDialogRef<ProductDetailComponent>,) { }

  ngOnInit(): void {
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

}
