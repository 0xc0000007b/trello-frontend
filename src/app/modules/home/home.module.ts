import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "../../components/home/home.component";
import {RouterLink} from "@angular/router";
import {HomeHeaderComponent} from "../../components/home-header/home-header.component";
import {HomeHeroComponent} from "../../components/home-hero/home-hero.component";
import {HomeTeamComponent} from "../../components/home-team/home-team.component";
import {HomeInformationComponent} from "../../components/home-information/home-information.component";
import {HomeWorkflowComponent} from "../../components/home-workflow/home-workflow.component";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeHeroComponent,
    HomeTeamComponent,
    HomeInformationComponent,
    HomeWorkflowComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    BrowserModule
  ]
})
export class HomeModule { }
