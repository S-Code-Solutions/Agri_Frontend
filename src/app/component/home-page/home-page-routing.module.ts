import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import {HomeSubComponent} from "./components/home-sub/home-sub.component";

const routes: Routes = [{ path: '', component: HomePageComponent, children:[
    {path:'', component:HomeSubComponent}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
