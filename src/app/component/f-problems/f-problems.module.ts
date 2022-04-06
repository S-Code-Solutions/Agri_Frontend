import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FProblemsRoutingModule } from './f-problems-routing.module';
import { FProblemsComponent } from './f-problems.component';
import { SubFproblemsComponent } from './components/sub-fproblems/sub-fproblems.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    FProblemsComponent,
    SubFproblemsComponent
  ],
  imports: [
    CommonModule,
    FProblemsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatMenuModule
  ]
})
export class FProblemsModule { }
