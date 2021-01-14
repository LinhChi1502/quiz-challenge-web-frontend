import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './login/layout/layout.component';
import {LoginComponent} from './login/login/login.component';
import {AdminHomeComponent} from './admin/admin-home/admin-home.component';
import {HomepageComponent} from './user/homepage/homepage.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent
  },

  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'admin', component: AdminHomeComponent
  },

  {
    path: 'home', component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
