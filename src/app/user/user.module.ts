import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from "./user-routing.module";
import {MaterialModule} from "../material/material.module";
import {HomepageComponent} from "./homepage/homepage.component";
import {NavbarComponent} from "./homepage/navbar/navbar.component";
import {SidebarComponent} from "./homepage/sidebar/sidebar.component";



@NgModule({
  declarations: [
    HomepageComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
  ]
})
export class UserModule { }
