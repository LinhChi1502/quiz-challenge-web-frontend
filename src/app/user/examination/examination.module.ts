import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from "../user-routing.module";
import {MaterialModule} from "../../material/material.module";
import {HomeComponent} from "./home/home.component";
import {ListExamComponent} from "./list-exam/list-exam.component";
import {ExamiationRoutingModule} from "./examiation-routing.module";
import {FormsModule} from "@angular/forms";
import {ProcessExamComponent} from "./process-exam/process-exam.component";



@NgModule({
  declarations: [HomeComponent, ListExamComponent, ProcessExamComponent],
    imports: [
        CommonModule,
        ExamiationRoutingModule,
        MaterialModule,
        FormsModule,
    ]
})
export class ExaminationModule { }
