import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, filter, map, Observable} from "rxjs";
import IUser from "../../assets/shared/users/currentUser";
import {environment} from "../../environments/environment";
import IRegisterRequest from "../../assets/shared/registerRequest";
import ILoginRequest from "../../assets/shared/users/loginRequest";
import {SocketService} from "./socket.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api: string = environment.baseUrl
  user$ = new BehaviorSubject<IUser | null | undefined>
          (undefined);
  isLogged$ = this.user$.pipe(
    filter(user => user !== undefined ),
    map(Boolean)
  )
  constructor(private http: HttpClient, private socket: SocketService) { }

  getUser(): Observable<IUser> {
    return this.http.get<IUser>(this.api + '/user')
  }

  setUser(user: IUser | null): void {
    this.user$.next(user);
  }

  register(
    registerRequest: IRegisterRequest
  ): Observable<IUser> {
    const url = environment.baseUrl + '/users';
    return this.http.post<IUser>(url, registerRequest);
  }
  login(
    loginRequest: ILoginRequest
  ): Observable<IUser> {
    const url = environment.baseUrl + '/users/login';
    return this.http.post<IUser>(url, loginRequest);
  }

  setToken(user: IUser): void {
    localStorage.setItem('token', user.token);
  }

  logout() {
      localStorage.removeItem('token')
    this.user$.next(null);
      this.socket.disconnect();
  }
}
