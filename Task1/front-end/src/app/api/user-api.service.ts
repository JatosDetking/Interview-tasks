import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { databaseURL } from './env';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string) {
    return this.http.post(`${databaseURL}/users/login`,
      {username, password}
    )
  }
  register(username: string, password: string, role: string) {
    return this.http.post(`${databaseURL}/users/register`,
      {username, password, role}
    )
  }
}
