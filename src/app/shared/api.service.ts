import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment'
import {DayPilot} from "@daypilot/daypilot-lite-angular";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = environment.URL;
  constructor(private http:HttpClient) { }
  
 // for mail
  postMail(data:any){
    return this.http.post<any>(this.apiURL + "mail", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getMails(){
    return this.http.get<any>(this.apiURL + "mail")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getMail(id: number){
    return this.http.get<any>(this.apiURL + "mail/" + id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateMailStatus(data:any, id: number){
    return this.http.put<any>(this.apiURL + "mail/" + id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteMail(id: number){
    return this.http.delete<any>(this.apiURL + "mail/"+ id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  // for contact

  postContact(data:any){
    return this.http.post<any>(this.apiURL + "contact", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
  getContacts(){
    return this.http.get<any>(this.apiURL + "contact")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
  getContact(id: number){
    return this.http.get<any>(this.apiURL + "contact/" + id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
  deleteContact(id: number){
    return this.http.delete<any>(this.apiURL + "contact/"+ id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  // for event
   postEvent(data:any){
    return this.http.post<any>(this.apiURL + "events", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getEvents(){
    return this.http.get<any>(this.apiURL + "events")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}

