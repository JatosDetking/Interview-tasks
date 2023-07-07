import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, throwError } from 'rxjs';
import { UserApiService } from '../api/user-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
    private userApiService: UserApiService,
    private router: Router
  ) { }

  getToken(){
    return localStorage.getItem('token');
  }

  loggedId() {
    let token = this.getToken();
    if (token) {
      return true
    } else {
      return false
    }
  }
  login(username: string, password: string) {
    username = username.trim()
    password = password.trim()
    return this.userApiService.login(username, password).pipe(map((res: any) => {
      if (res.status != 'denied') {
        this.saveUserInfo(res);
      }  
      return res
    }))
  }
  register(username: string, password: string, role: string) {
    username = username.trim()
    password = password.trim()
    return this.userApiService.register(username, password, role).pipe(map((res) => {
      console.log(res);
      return res
    }))
  }
  saveUserInfo(res: any) {
    localStorage.setItem("token", res.token)
    localStorage.setItem("role", res.status)
  }
  logout(){
    this.router.navigate(['login']);
    localStorage.removeItem("token")
    localStorage.removeItem("role")
  }
}
