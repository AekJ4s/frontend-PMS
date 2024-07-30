import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Response from '../models/response';
import CBEsUser from '../models/CBEsUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private readonly baseURL = 'http://192.168.1.11:8000/api/Authorization/Login';
  private accessToken = localStorage.getItem('Bearer');
  private tokenType = `Bearer ${this.accessToken}`;

  constructor(private httpClient: HttpClient) {}

  Login(login: CBEsUser): Observable<Response> {
    const url = this.baseURL;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {
      username: login.username,
      password: login.password
    };
    return this.httpClient.post<Response>(url, body, { headers });
  }
}
