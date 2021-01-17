import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './user/homepage/navbar/navbar.component';
import { LayoutComponent } from './login/layout/layout.component';
import { SidebarComponent } from './user/homepage/sidebar/sidebar.component';
import { LoginComponent } from './login/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./login/helper/jwt-interceptor";
import {ErrorInterceptor} from "./login/helper/error-interceptor";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import {MaterialModule} from './material/material.module';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { CategoryComponent } from './category/category/category.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { DeleteCategoryComponent } from './category/delete-category/delete-category.component';
import { QuestionComponent } from './question/question/question.component';
import { ListQuestionComponent } from './question/list-question/list-question.component';
import { EditQuestionComponent } from './question/edit-question/edit-question.component';
import { DeleteQuestionComponent } from './question/delete-question/delete-question.component';
import { CreateQuestionTruefalseComponent } from './question/create-question-truefalse/create-question-truefalse.component';
import { CreateQuestionInputComponent } from './question/create-question-input/create-question-input.component';
import { CreateQuesMulOneComponent } from './question/create-ques-mul-one/create-ques-mul-one.component';
import { CreateQuesMulMulComponent } from './question/create-ques-mul-mul/create-ques-mul-mul.component';
import { ExamComponent } from './exam/exam.component';
import { ExamListComponent } from './exam/exam-list/exam-list.component';
import { CreateExamComponent } from './exam/create-exam/create-exam.component';
import { ExamDetailComponent } from './exam/exam-detail/exam-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    LayoutComponent,
    SidebarComponent,
    LayoutComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    CategoryComponent,
    ListCategoryComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent,
    QuestionComponent,
    ListQuestionComponent,
    EditQuestionComponent,
    DeleteQuestionComponent,
    CreateQuestionTruefalseComponent,
    CreateQuestionInputComponent,
    CreateQuesMulOneComponent,
    CreateQuesMulMulComponent,
    ExamComponent,
    ExamListComponent,
    CreateExamComponent,
    ExamDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
