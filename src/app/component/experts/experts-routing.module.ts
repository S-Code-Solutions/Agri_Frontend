import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertsComponent } from './experts.component';
import {SubExpertsComponent} from "./components/sub-experts/sub-experts.component";

const routes: Routes = [{ path: '', component: ExpertsComponent, children:[
    {path:'', component:SubExpertsComponent}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpertsRoutingModule { }
