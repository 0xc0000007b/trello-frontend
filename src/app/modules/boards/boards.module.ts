import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {BoardsComponent} from "../../components/boards/boards.component";
import {BoardsService} from "../../services/boards.service";
import {InlineFormModule} from "../inline-form/inline-form.module";
import {TopbarModule} from "../topbar/topbar.module";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    BoardsComponent,

  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    InlineFormModule,
    TopbarModule,
    BrowserModule
  ],
  providers: [
    BoardsService
  ]
})
export class BoardsModule { }
