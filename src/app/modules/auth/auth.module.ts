import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from "../../services/auth.service";
import {RegisterComponent} from "../../components/register/register.component";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "../../components/login/login.component";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterLink
  ]
})
export class AuthModule { }
