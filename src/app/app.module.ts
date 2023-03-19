import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./modules/auth/auth.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeModule} from "./modules/home/home.module";
import {AuthInterceptor} from "./services/authintersertor.service";
import {SocketService} from "./services/socket.service";
import {BoardModule} from "./modules/board/board.module";
import {BoardsModule} from "./modules/boards/boards.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomeModule,
    BoardModule,
    BoardsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
  SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
