import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import {FarmerLoginComponent} from "./components/farmer-login/farmer-login.component";
import {ExpretLoginComponent} from "./components/expret-login/expret-login.component";

const routes: Routes = [{ path: '', component: AuthenticationComponent,children:[
    {path:'', component:FarmerLoginComponent},
    {path:'expertlogin', component:ExpretLoginComponent},
    {path:'farmerlogin', component:FarmerLoginComponent}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
