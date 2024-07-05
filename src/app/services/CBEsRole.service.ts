import { Injectable } from "@angular/core";
import CBEsRole from "../models/CBEsRole";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
    const token = localStorage.getItem('Token'); // Replace 'token' with your actual token key in LocalStorage
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`); // Use Bearer token
    return this.httpClient.get<Response>(`${this.baseURL}`,{headers});
  }
  Delete(id : number){
    const token = localStorage.getItem('Token'); // Replace 'token' with your actual token key in LocalStorage
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`); // Use Bearer token
    return this.httpClient.delete<Response>(`${this.baseURL}/delete/${id}`,{headers});
  }
  GetAllBin(){
    const token = localStorage.getItem('Token'); // Replace 'token' with your actual token key in LocalStorage
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`); // Use Bearer token
    return this.httpClient.get<Response>(`${this.baseURL}/bin`,{headers});
  }
  CancelDelete(id : number):Observable<Response>{
    const token = localStorage.getItem('Token'); // Replace 'token' with your actual token key in LocalStorage
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`); // Use Bearer token
    return this.httpClient.put<Response>(`${this.baseURL}/bin/CancelDelete/`,{id:id},{headers});
  }
  LastDelete(id : number){
    const token = localStorage.getItem('Token'); // Replace 'token' with your actual token key in LocalStorage
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`); // Use Bearer token
    return this.httpClient.delete<Response>(`${this.baseURL}/bin/LastDelete/${id}`,{headers});
  }
  GetRoleWithUser(id:number){
    const token = localStorage.getItem('Token'); // Replace 'token' with your actual token key in LocalStorage
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`); // Use Bearer token
    return this.httpClient.get<Response>(`${this.baseURL}/${id}`,{headers});
  }
  EditRole(role:CBEsRole): Observable<any> {
    const token = localStorage.getItem('Token'); // Replace 'token' with your actual token key in LocalStorage
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`); // Use Bearer token
    return this.httpClient.put<Response>(`${this.baseURL}`, role, { headers });
  }

  CreateRole(role:CBEsRole){
    const token = localStorage.getItem('Token'); // Replace 'token' with your actual token key in LocalStorage
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`); // Use Bearer token
    return this.httpClient.post<Response>(`${this.baseURL}`, role,{headers} )
  }

  RoleGetByID(id : number){
    const token = localStorage.getItem('Token'); // Replace 'token' with your actual token key in LocalStorage
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`); // Use Bearer token
    return this.httpClient.get<Response>(`${this.baseURL}/${id}`,{headers})
  }

}
