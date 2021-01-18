import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './user/homepage/navbar/navbar.component';
import { LayoutComponent } from './login/layout/layout.component';
import { LoginComponent } from './login/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './login/helper/jwt-interceptor';
import {ErrorInterceptor} from './login/helper/error-interceptor';
import {FormsModule} from '@angular/forms';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import {MaterialModule} from './material/material.module';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { CategoryComponent } from './category/category/category.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { NgxPaginationModule} from 'ngx-pagination';
import {SidebarComponent} from './user/homepage/sidebar/sidebar.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ListExamComponent } from './user/examination/list-exam/list-exam.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    CategoryComponent,
    ListCategoryComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    NgxPaginationModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
