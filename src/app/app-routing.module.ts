import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {BoardsComponent} from "./components/boards/boards.component";
import {LoginGuard} from "./guards/login.guard";
import {BoardComponent} from "./components/board/board.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'boards', component:BoardsComponent, canActivate: [LoginGuard]},
  {path: 'boards/:boardId', component:BoardComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
