import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'top-bar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopBarComponent {

  logout() {
    this.auth.logout()
    this.router.navigateByUrl('/')
  }
  constructor(private auth: AuthService, private router: Router) {
  }
}
