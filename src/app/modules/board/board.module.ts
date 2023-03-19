import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardComponent} from "../../components/board/board.component";
import {BoardService} from "../../services/board.service";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [
    BoardService
  ],
  exports: [BoardComponent]
})
export class BoardModule { }
