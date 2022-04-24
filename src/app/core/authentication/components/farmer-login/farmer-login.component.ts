import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {CookieService} from "ngx-cookie";
import {FarmerSService} from "../../services/farmer-s.service";
import {FarmerDTO} from "../../dto/farmerDTO";

@Component({
  selector: 'app-farmer-login',
  templateUrl: './farmer-login.component.html',
  styleUrls: ['./farmer-login.component.scss']
})
export class FarmerLoginComponent implements OnInit {
  farmerForm!: FormGroup;
  LoginForm!:FormGroup;

  constructor(private router: Router,
              private _snackBar: MatSnackBar,
              private farmerservice:FarmerSService,
              private cookieService: CookieService,
              ) { }

  ngOnInit(): void {
    this.farmerForm = new FormGroup({
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    });
    this.LoginForm = new FormGroup({
      farmer_name: new FormControl('', [
        Validators.required
      ]),
      farmer_contact: new FormControl('', [
        Validators.required
      ]),
      status: new FormControl('', [
        Validators.required
      ]),
      farmer_password: new FormControl('', [
        Validators.required
      ]),
    })
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  openSnackBar() {
    this._snackBar.open('Wrong Credentials', 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['red-snackbar','login-snackbar']
    });
  }

  signIn() {
    this.farmerservice.getFiles(this.farmerForm.get('email')?.value).subscribe(res=>{
      console.log(res.data)
      if (res.data.farmer_password == this.farmerForm.get('password')?.value){
        this.router.navigate(['/homePage']);
        this.cookieService.put('User', 'Farmer');
        this.cookieService.put('Arr', JSON.stringify(res.data));
      }else{
        this.openSnackBar();
      }
    })
  }

  addUser(){
    this.farmerservice.AddnewUser(new FarmerDTO(
      this.LoginForm.get('farmer_contact')?.value,
      "",
      this.LoginForm.get('farmer_name')?.value,
      this.LoginForm.get('farmer_password')?.value,
      "",
      this.LoginForm.get('status')?.value
    )).subscribe(res=>{
      console.log(res)
      if (res.code == '201'){
        this.openSnackBars()
      }else{
        this.openFailureSnackBar()
      }
    })
  }

  openSnackBars(){
    this._snackBar.open('User Added Successful!!', 'ok',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['green-snackbar', 'login-snackbar']
    });
  }

  openFailureSnackBar(){
    this._snackBar.open('User Added Unsuccessful!!', 'ok',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['green-snackbar', 'login-snackbar']
    });
  }

}
