import { Component, OnInit } from '@angular/core';
import {AppService} from './app-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private  contacts:  Array<object> = [];
  constructor(private  apiService:  AppService) { }
  ngOnInit() {
      this.getContacts();
  }
  public  getContacts(){
      this.apiService.getContacts().subscribe((data:  Array<object>) => {
          this.contacts  =  data;
          console.log(data);
      });
  }
}
