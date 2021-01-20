import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./login/home/home.component";
import {AuthGuard} from "./login/helper/auth-guard";
import {LoginComponent} from "./login/login/login.component";
import {RegisterComponent} from "./login/register/register.component";
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
import {ExamComponent} from './exam/exam.component';
import {CreateExamComponent} from './exam/create-exam/create-exam.component';
import {ExamListComponent} from './exam/exam-list/exam-list.component';
import {ExamDetailComponent} from './exam/exam-detail/exam-detail.component';
import {LayoutComponent} from "./login/layout/layout.component";
import {AdminGuard} from "./login/helper/admin-guard";
import {ListUserComponent} from './admin/list-user/list-user.component';
import {ListUser2Component} from './admin/list-user2/list-user2.component';
import {HistoryUserComponent} from './admin/history-user/history-user.component';
import {DetailUserExamComponent} from './admin/detail-user-exam/detail-user-exam.component';


const routes: Routes = [

  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent},

  {
    path: 'admin', component: AdminHomeComponent,
    canActivate: [AdminGuard],
    canActivateChild: [AdminGuard],
    children: [
      {
        path: 'category', component: CategoryComponent,
        children: [
          {path: '', component: ListCategoryComponent, outlet: 'category'},
          {path: 'list-category', component: ListCategoryComponent, outlet: 'category'},
          {path: 'create-category', component: CreateCategoryComponent, outlet: 'category'},
          {path: 'edit-category/:id', component: EditCategoryComponent, outlet: 'category'},
          {path: 'delete-category/:id', component: DeleteCategoryComponent, outlet: 'category'}
        ]
      },

      {
        path: 'question', component: QuestionComponent,
        children: [
          {path: '', component: ListQuestionComponent, outlet: 'question'},
          {path: 'list-question', component: ListQuestionComponent, outlet: 'question'},
          {path: 'create-ques-mul-one', component: CreateQuesMulOneComponent, outlet: 'question'},
          {path: 'create-ques-mul-mul', component: CreateQuesMulMulComponent, outlet: 'question'},
          {path: 'create-question-truefalse', component: CreateQuestionTruefalseComponent, outlet: 'question'},
          {path: 'create-question-input', component: CreateQuestionInputComponent, outlet: 'question'},
          {path: 'edit-question/:id', component: EditQuestionComponent, outlet: 'question'},
          {path: 'delete-question/:id', component: DeleteQuestionComponent, outlet: 'question'}
        ]
      },

      {path:'exam', component: ExamComponent,
        children:[
          {path: '',component: ExamListComponent,outlet: 'exam'},
          {path: 'exam-list',component:ExamListComponent ,outlet: 'exam'},
          {path: 'create-exam',component: CreateExamComponent,outlet: 'exam'},
          {path: 'exam-detail/:id',component: ExamDetailComponent,outlet: 'exam'},

        ]

      },
      {
        path: 'list-user', component: ListUserComponent,
        children: [
          {path: 'list-user2', component: ListUser2Component, outlet: 'listuser'},
          {path: 'history-user/:id', component: HistoryUserComponent, outlet: 'listuser'},
          {path: 'detail-user-exam/:id', component: DetailUserExamComponent, outlet: 'listuser'},

        ]
      }

    ]
  },

  {
    path: 'home', component: HomepageComponent
  },

  {
    path: '', loadChildren: () => import('./user/user.module').then(result => result.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
