import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie";
import {NavigationEnd, Router} from "@angular/router";
import {first} from "rxjs";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loggedAll=true;
  loggedFarm=false;
  cookieValues :any
  cookieValue :any
  loginbtn=true;
  logoutbtn= false;
  UsersName:any
  userf=false

  constructor(private cookieService: CookieService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.cookieValues = JSON.parse(this.cookieService.get('Arr'));
    this.validLogin()
    // console.log(JSON.parse(this.cookieService.get('Arr')))
    console.log(this.cookieValues);
  }

  validLogin(){
    this.cookieValue = this.cookieService.get('User');
    if (this.cookieValue == 'Expert'){
      this.loggedAll=true;
      this.loggedFarm=true;
      this.loginbtn=false;
      this.logoutbtn= true;
      this.UsersName = this.cookieValues.expert_name;
      this.userf= false
    }else if (this.cookieValue == 'Farmer'){
      this.loggedAll=true;
      this.loggedFarm=true;
      this.loginbtn=false;
      this.logoutbtn= true;
      this.UsersName = this.cookieValues.farmer_name;
      this.userf= true
    }else{
      this.loggedAll=true;
      this.loggedFarm=false;
      this.loginbtn=true;
      this.logoutbtn= false;
      this.UsersName = '';
      this.userf= false
    }
  }

  logout() {
    this.cookieService.removeAll()
    this.router.navigate(['./homePage']);
    this.router.events.pipe(
      first(evt => evt instanceof NavigationEnd)
    ).subscribe(() => {
    this.locatione()
    });
  }

  locatione(){
    //
    window.location.reload()
  }

  AboutUSPage(){
    this.router.navigate(['./aboutUs']);
    this.router.events.pipe(
      first(evt => evt instanceof NavigationEnd)
    ).subscribe(() => {
      this.locatione()
    });
  }

  goShop(){
    this.router.navigate(['./products']);

    this.router.events.pipe(
      first(evt => evt instanceof NavigationEnd)

    ).subscribe(() => {

      this.locatione()
      // this.scroll.scrollToPosition([0,0]);
    });
  }

  chatUss(){
    this.router.navigate(['./chatUs']);
    this.router.events.pipe(
      first(evt => evt instanceof NavigationEnd)
    ).subscribe(() => {
      this.locatione()
    });
  }

  logut() {
    // this.cookieService.removeAll()
  }


}
