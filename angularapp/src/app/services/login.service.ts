import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public baseUrl = "https://8080-dbadafdedccaddccabddccffcdffefc.premiumproject.examly.io/";




}
