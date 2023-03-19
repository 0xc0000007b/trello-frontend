import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import IRegisterRequest from "../../../assets/shared/registerRequest";
import {Router} from "@angular/router";

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  errors: string | null = null
  form = this.fb.group({
    email: ['', Validators.required],
    name: ['', Validators.required],
    password: ['', Validators.required]
  });

  submit() {
    this.auth.register(this.form.value as IRegisterRequest).subscribe({
      next: (user) => {
        console.log('current user:', user)
        this.auth.setToken(user)
        this.auth.setUser(user)
        this.router.navigateByUrl('/')
      },
      error: err => {
        console.log(err)
        this.errors = err.error.join(', ')
      }

    });
  }
  constructor(private fb: FormBuilder,private auth: AuthService, private router: Router) {
  }
}
