import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './login/layout/layout.component';
import {LoginComponent} from './login/login/login.component';
import {AdminHomeComponent} from './admin/admin-home/admin-home.component';
import {HomepageComponent} from './user/homepage/homepage.component';
import {CategoryComponent} from './category/category/category.component';
import {ListCategoryComponent} from './category/list-category/list-category.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent
  },

  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'admin', component: AdminHomeComponent,
    children: [
      {path: 'category', component: CategoryComponent,
        children: [{path: 'list-category', component: ListCategoryComponent}]}
    ]
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
