import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from "../user-routing.module";
import {MaterialModule} from "../../material/material.module";
import {HomeComponent} from "./home/home.component";
import {ListExamComponent} from "./list-exam/list-exam.component";
import {ExamiationRoutingModule} from "./examiation-routing.module";



@NgModule({
  declarations: [HomeComponent, ListExamComponent],
  imports: [
    CommonModule,
    ExamiationRoutingModule,
    MaterialModule,
  ]
})
export class ExaminationModule { }
