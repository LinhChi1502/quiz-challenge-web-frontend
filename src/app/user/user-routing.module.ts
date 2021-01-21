import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./homepage/homepage.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HomeComponent} from "./examination/home/home.component";


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'examination',
        loadChildren: () => import('./examination/examination.module').then(result => result.ExaminationModule)
      },
      {
        path: 'history',
        loadChildren: () => import('./history/history.module').then(result => result.HistoryModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
