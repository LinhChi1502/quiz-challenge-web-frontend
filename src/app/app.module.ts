import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './user/homepage/navbar/navbar.component';
// @ts-ignore
import {MatTabsModule} from "@angular/material/tabs";
// @ts-ignore
import {MatIconModule} from '@angular/material/icon';
import { LayoutComponent } from './login/layout/layout.component';
import { LoginComponent } from './login/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./login/helper/jwt-interceptor";
import {ErrorInterceptor} from "./login/helper/error-interceptor";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "./login/home/home.component";


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    LayoutComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[FormsModule,ReactiveFormsModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
