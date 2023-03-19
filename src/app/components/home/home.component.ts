import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{

  isLogged: Subscription | undefined
  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
   this.isLogged = this.auth.isLogged$.subscribe(loggeg => {
      if (loggeg) this.router.navigateByUrl('/boards')
    })
  }

  ngOnDestroy(): void {
    this.isLogged.unsubscribe()
  }


}
