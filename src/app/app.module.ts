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
