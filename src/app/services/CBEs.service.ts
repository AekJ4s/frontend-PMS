import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import Response from "../models/response";

@Injectable({
  providedIn: 'root',
})

export class CBEsService{
  private readonly baseURL = 'http://192.168.1.14:8000/api/CBEs'

  constructor(private httpClient: HttpClient) {}
    public SelecetOption = ""

  GetAll(){
    const token = localStorage.getItem('Token'); // Replace 'token' with your actual token key in LocalStorage
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`); // Use Bearer token
    return this.httpClient.get<Response>(`${this.baseURL}`,{headers});
  }
  GetByID(id:number){
    const token = localStorage.getItem('Token'); // Replace 'token' with your actual token key in LocalStorage
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`); // Use Bearer token
    return this.httpClient.get<Response>(`${this.baseURL}/${id}`,{headers});
  }
  GetCBEsInBin(){
    const token = localStorage.getItem('Token'); // Replace 'token' with your actual token key in LocalStorage
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`); // Use Bearer token
    return this.httpClient.delete<Response>(`${this.baseURL}/bin`,{headers});
  }
  Delete(id:number){
    const token = localStorage.getItem('Token'); // Replace 'token' with your actual token key in LocalStorage
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`); // Use Bearer token
    return this.httpClient.delete<Response>(`${this.baseURL}/${id}`,{headers});
  }
}
