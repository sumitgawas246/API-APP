import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  API_URL  =  'http://localhost:3000/api/ExpenseData';
  constructor(private  httpClient:  HttpClient) {}
  getContacts(){
      return  this.httpClient.get(`${this.API_URL}`);
}
}