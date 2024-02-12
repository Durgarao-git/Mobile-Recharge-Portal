import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  public baseUrl="https://8080-dbadafdedccaddccabddccffcdffefc.premiumproject.examly.io/";

  public registerUser(user:User){

    return this.http.post<User>(this.baseUrl+"postuser",user);
  }

  public getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl+"getallusers")
  }




}
