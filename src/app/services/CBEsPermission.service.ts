import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Response from "../models/response";

@Injectable({
  providedIn: 'root',
})

export class CBEsPermissionService{
  private readonly baseURL = 'http://192.168.1.11:8000/api/CBEsPermission'

  constructor(private httpClient: HttpClient) {}
    public SelecetOption = ""

  GetAll(){
    // const headers = new HttpHeaders().set('Authorization', this.tokenType);
    // const options = { headers: headers };
    return this.httpClient.get<Response>(`${this.baseURL}`);
  }
  // GetHistoryById(){
  //   return this.httpClient.get<Response>(`${this.baseURL}`);
  // }
}
