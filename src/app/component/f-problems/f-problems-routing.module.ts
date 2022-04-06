import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FProblemsComponent } from './f-problems.component';
import {SubFproblemsComponent} from "./components/sub-fproblems/sub-fproblems.component";

const routes: Routes = [{ path: '', component: FProblemsComponent, children:[
    {path:'', component:SubFproblemsComponent}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FProblemsRoutingModule { }
