import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ListExamComponent} from "./list-exam/list-exam.component";
import {ProcessExamComponent} from "./process-exam/process-exam.component";



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list', component: ListExamComponent,
      },
      {
        path: 'process/:id', component: ProcessExamComponent
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
export class ExamiationRoutingModule { }
