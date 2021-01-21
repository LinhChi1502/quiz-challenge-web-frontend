import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import {MaterialModule} from "../../material/material.module";
import {FormsModule} from "@angular/forms";
import {HistoryRoutingModule} from "./history-routing.module";



@NgModule({
  declarations: [HomeComponent, DetailComponent, ListComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    MaterialModule,
    FormsModule,
  ]
})
export class HistoryModule { }
