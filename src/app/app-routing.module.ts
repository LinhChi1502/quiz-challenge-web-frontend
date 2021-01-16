import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./login/home/home.component";
import {AuthGuard} from "./login/helper/auth-guard";
import {LoginComponent} from "./login/login/login.component";
import {RegisterComponent} from "./login/register/register.component";
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './login/layout/layout.component';
import {LoginComponent} from './login/login/login.component';
import {AdminHomeComponent} from './admin/admin-home/admin-home.component';
import {HomepageComponent} from './user/homepage/homepage.component';
import {CategoryComponent} from './category/category/category.component';
import {ListCategoryComponent} from './category/list-category/list-category.component';
import {CreateCategoryComponent} from './category/create-category/create-category.component';
import {EditCategoryComponent} from './category/edit-category/edit-category.component';
import {DeleteCategoryComponent} from './category/delete-category/delete-category.component';
import {QuestionComponent} from './question/question/question.component';
import {ListQuestionComponent} from './question/list-question/list-question.component';
import {EditQuestionComponent} from './question/edit-question/edit-question.component';
import {DeleteQuestionComponent} from './question/delete-question/delete-question.component';
import {CreateQuestionTruefalseComponent} from './question/create-question-truefalse/create-question-truefalse.component';
import {CreateQuestionInputComponent} from './question/create-question-input/create-question-input.component';
import {CreateQuesMulOneComponent} from './question/create-ques-mul-one/create-ques-mul-one.component';
import {CreateQuesMulMulComponent} from './question/create-ques-mul-mul/create-ques-mul-mul.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
    path: 'admin', component: AdminHomeComponent,
    children: [

      {
        path: 'category', component: CategoryComponent,
        children: [
          {path: 'list-category', component: ListCategoryComponent, outlet: 'category'},
          {path: 'create-category', component: CreateCategoryComponent, outlet: 'category'},
          {path: 'edit-category/:id', component: EditCategoryComponent, outlet: 'category'},
          {path: 'delete-category/:id', component: DeleteCategoryComponent, outlet: 'category'}
        ]
      },

      {
        path: 'question', component: QuestionComponent,
        children: [
          {path: 'list-question', component: ListQuestionComponent, outlet: 'question'},
          {path: 'create-ques-mul-one', component: CreateQuesMulOneComponent, outlet: 'question'},
          {path: 'create-ques-mul-mul', component: CreateQuesMulMulComponent, outlet: 'question'},
          {path: 'create-question-truefalse', component: CreateQuestionTruefalseComponent, outlet: 'question'},
          {path: 'create-question-input', component: CreateQuestionInputComponent, outlet: 'question'},
          {path: 'edit-question/:id', component: EditQuestionComponent, outlet: 'question'},
          {path: 'delete-question/:id', component: DeleteQuestionComponent, outlet: 'question'}
        ]
      },

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
