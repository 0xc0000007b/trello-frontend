import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import IUser from "../assets/shared/users/currentUser";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Router} from "@angular/router";
import {SocketService} from "./services/socket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{



  constructor(private auth: AuthService, private socket: SocketService) {
  }

  ngOnInit(): void {
    this.auth.getUser().subscribe({
      next: (user) => {
        this.socket.setupConnection(user)
        this.auth.setUser(user)
      },
      error: (err) => {
        console.log(err)
        this.socket.disconnect();
        this.auth.setUser(null);
      }
    });
  }
}
