import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie";
import {SubUserService} from "../../services/sub-user.service";
import {UserDTO} from "../../dto/userDTO";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-sub-user',
  templateUrl: './sub-user.component.html',
  styleUrls: ['./sub-user.component.scss']
})
export class SubUserComponent implements OnInit {

  cookieValues :any
  UsersImg:any
  options: string[] = ['Chemical', 'Natural', 'Both'];
  SignupForm!: FormGroup;

  constructor(private cookieService: CookieService,
              private userService:SubUserService,
              private _snackBar: MatSnackBar,
              private scroll: ViewportScroller) { }

  ngOnInit(): void {
    this.SignupForm = new FormGroup({
      farmer_contact: new FormControl('', [
        Validators.required
      ]),
      farmer_image: new FormControl('', [
        Validators.required
      ]),
      farmer_name: new FormControl('', [
        Validators.required
      ]),
      farmer_password: new FormControl('', [
        Validators.required
      ]),
      fertilizer: new FormControl('', [
        Validators.required
      ]),
      status: new FormControl('', [
        Validators.required
      ])
    });
    this.cookieValues = JSON.parse(this.cookieService.get('Arr'));
    this.UsersImg = this.cookieValues.farmer_image
    this.SignupForm.setValue({
      farmer_contact : this.cookieValues.farmer_contact,
      farmer_image: '',
      farmer_name:this.cookieValues.farmer_name,
      farmer_password:this.cookieValues.farmer_password,
      fertilizer:'',
      status:this.cookieValues.status,
    })
    this.signIn()
  }

  updateUser(){
    this.userService.UpdateUser(new UserDTO(
      this.cookieValues.farmer_id,
      this.SignupForm.get('farmer_contact')?.value,
      this.SignupForm.get('farmer_image')?.value,
      this.SignupForm.get('farmer_name')?.value,
      this.SignupForm.get('farmer_password')?.value,
      this.SignupForm.get('fertilizer')?.value,
      this.SignupForm.get('status')?.value,
    )).subscribe(res=>{
      console.log(res)
      if (res.code == '200'){
        this.openSnackBars()
        this.signIn();
      }else{
        this.openFailureSnackBar()
      }
    })
  }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }

  signIn() {
    this.userService.getFiles(this.SignupForm.get('farmer_name')?.value).subscribe(res=>{
      if (res.code == '200'){
      this.SignupForm.setValue({
        farmer_contact : res.data.farmer_contact,
        farmer_image: res.data.farmer_image,
        farmer_name:res.data.farmer_name,
        farmer_password:res.data.farmer_password,
        fertilizer:res.data.fertilizer,
        status:res.data.status,
      })
      this.UsersImg = res.data.farmer_image
        this.scrollToTop()
      }else{
        console.log("not updated")
      }
    })
  }


  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  openSnackBars(){
    this._snackBar.open('User Updated Successful!!', 'ok',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['green-snackbar', 'login-snackbar']
    });
  }

  openFailureSnackBar(){
    this._snackBar.open('User Update Unsuccessful!!', 'ok',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['red-snackbar', 'login-snackbar']
    });
  }

}
