import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./homepage/homepage.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { AuthGuard } from '../login/helper/auth-guard';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    canActivateChild: [AuthGuard],
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
