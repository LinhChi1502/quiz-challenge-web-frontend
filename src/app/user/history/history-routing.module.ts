import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ListComponent} from "./list/list.component";
import {DetailComponent} from "./detail/detail.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list', component: ListComponent
      },
      {
        path: 'detail/:id', component: DetailComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
