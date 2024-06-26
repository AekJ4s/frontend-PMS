import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Response from "../models/response";

@Injectable({
  providedIn: 'root',
})

export class CBEsService{
  private readonly baseURL = 'http://192.168.1.14:8000/api/CBEs'

  constructor(private httpClient: HttpClient) {}
    public SelecetOption = ""

  GetAll(){
    // const headers = new HttpHeaders().set('Authorization', this.tokenType);
    // const options = { headers: headers };
    return this.httpClient.get<Response>(`${this.baseURL}`);
  }
}
