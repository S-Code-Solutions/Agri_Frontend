import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselModule} from "ngx-owl-carousel-o";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
// import { AuthenticationComponent } from './core/authentication/authentication.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {NgChartsModule} from "ng2-charts";
import {NgCircleProgressModule} from "ng-circle-progress";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { DialogsComponent } from './core/dialogs/dialogs.component';
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {CookieModule} from "ngx-cookie";
import {NgxScrollTopModule} from "ngx-scrolltop";
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [
    AppComponent,
    // AuthenticationComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundComponent,
    DialogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FontAwesomeModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    NgChartsModule,
    NgCircleProgressModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    CookieModule.forRoot(),
    NgxScrollTopModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
