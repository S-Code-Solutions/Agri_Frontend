import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {CookieService} from "ngx-cookie";
import {ExpertsService} from "../../services/experts.service";

@Component({
  selector: 'app-expret-login',
  templateUrl: './expret-login.component.html',
  styleUrls: ['./expret-login.component.scss']
})
export class ExpretLoginComponent implements OnInit {
  driverForm!: FormGroup;

  constructor( private router: Router,
               private expertservice :ExpertsService,
               private _snackBar: MatSnackBar,
               private cookieService: CookieService) { }

  ngOnInit(): void {
    this.driverForm = new FormGroup({
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    });
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
    this.expertservice.getFiles(this.driverForm.get('email')?.value).subscribe(res=>{
      console.log(res.data)
      if (res.data.expert_password == this.driverForm.get('password')?.value){
        this.router.navigate(['/homePage']);
        this.cookieService.put('User', 'Expert');
        this.cookieService.put('Arr', JSON.stringify(res.data));
      }else{
        this.openSnackBar();
      }
    })
  }
}
