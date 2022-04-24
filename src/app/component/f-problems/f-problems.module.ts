import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FProblemsRoutingModule } from './f-problems-routing.module';
import { FProblemsComponent } from './f-problems.component';
import { SubFproblemsComponent } from './components/sub-fproblems/sub-fproblems.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatMenuModule} from "@angular/material/menu";
import {MatExpansionModule} from "@angular/material/expansion";


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
        MatMenuModule,
        ReactiveFormsModule,
        MatExpansionModule
    ]
})
export class FProblemsModule { }
