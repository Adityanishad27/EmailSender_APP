import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {
   private baseUrl:String= 'http://localhost:8080';
    constructor(private http:HttpClient) { }
    sendEmail(data:any){
 return this.http.post(`${this.baseUrl}/sendEmail`,data)
 }
}
