import { Injectable } from "@angular/core";
import CBEsRole from "../models/CBEsRole";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import Response from "../models/response";
import { Observable } from "rxjs";
import CBEsUserWithRole from "../models/CBEsUserWithRole";

@Injectable({
  providedIn: 'root',
})

export class CBEsUserService{
  private readonly baseURL = 'http://192.168.1.11:8000/api/CBEsUser'

  constructor(private httpClient: HttpClient) {}
    public SelecetOption = ""

  GetAll(){
    // const headers = new HttpHeaders().set('Authorization', this.tokenType);
    // const options = { headers: headers };
    return this.httpClient.get<Response>(`${this.baseURL}`);
  }

}
