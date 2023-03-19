import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InlineFormComponent} from "../../components/inline-form/inline-form.component";
import {TopBarComponent} from "../../components/topbar/topbar.component";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [ TopBarComponent],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [ TopBarComponent]
})
export class TopbarModule { }
