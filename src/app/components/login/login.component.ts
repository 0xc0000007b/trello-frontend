import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import IRegisterRequest from "../../../assets/shared/registerRequest";
import {AuthService} from "../../services/auth.service";
import ILoginRequest from "../../../assets/shared/users/loginRequest";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errors: string | null = null
  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  submit() {
    this.auth.login(this.form.value as ILoginRequest).subscribe({
      next: (user) => {
        console.log('logged as:', user)
        this.auth.setToken(user)
        this.auth.setUser(user)
        this.errors = null;
        this.router.navigateByUrl('/')
      },
      error: (err: HttpErrorResponse) => {
        console.log(err)
        this.errors = err.error.emailOrPassword;
      }

    });
  }
  constructor(private fb: FormBuilder,private auth: AuthService,private router: Router) {
  }
}
