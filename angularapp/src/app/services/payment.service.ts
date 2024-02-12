import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../model/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  public baseUrl = "https://8080-dbadafdedccaddccabddccffcdffefc.premiumproject.examly.io/"


  addPayemt(rechargeId:any, payment:any) {
    return this.http.post(this.baseUrl + "addpayment/" + rechargeId + "/" + rechargeId, payment);
  }

  getAllPayments(){
    return this.http.get<Payment[]>(this.baseUrl+"getallpayments");
  }
}
