import { Injectable } from "@angular/core";
import CBEsRole from "../models/CBEsRole";
import { HttpClient } from "@angular/common/http";
import Response from "../models/response";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class CBEsRoleService{
  private readonly baseURL = 'http://192.168.1.14:8000/api/CBEsRole'

  constructor(private httpClient: HttpClient) {}
    public SelecetOption = ""

  GetAll(){
    // const headers = new HttpHeaders().set('Authorization', this.tokenType);
    // const options = { headers: headers };
    return this.httpClient.get<Response>(`${this.baseURL}`);
  }
  Delete(id : number){
    return this.httpClient.delete<Response>(`${this.baseURL}/delete/${id}`);
  }
  GetAllBin(){
    return this.httpClient.get<Response>(`${this.baseURL}/bin`);
  }
  CancelDelete(id : number):Observable<Response>{
    return this.httpClient.put<Response>(`${this.baseURL}/bin/CancelDelete/`,{id:id});
  }
  LastDelete(id : number){
    return this.httpClient.delete<Response>(`${this.baseURL}/bin/LastDelete/${id}`);
  }
  GetRoleWithUser(id:number){
    return this.httpClient.get<Response>(`${this.baseURL}/${id}`);
  }
}
