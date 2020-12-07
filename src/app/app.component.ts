import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Customer } from './customer.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NajdiTutorAngular';
  model: Customer;
  newCustomer: Customer

  constructor(private http:HttpClient, private route:ActivatedRoute){}
  url = "https://localhost:44336/api/Customers/2"

  ngOnInit(){
    this.http.get<Customer>(this.url).subscribe((tmp: Customer) => {
      this.model = tmp;
      console.log(tmp)
    })
    this.newCustomer = {
      name: "Viktor",
      surname: "Sadikovic",
      email: "viktor@gmail.com",
      phoneNumber: "071813486"
    }
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'})}
    // this.http.post<any>("https://localhost:44336/api/Customers/",this.newCustomer, options).subscribe()
  }

  onClick(){
    this.newCustomer = {
      name: "Viktor",
      surname: "Sadikovic",
      email: "viktor@gmail.com",
      phoneNumber: "071813486"
    }
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'})}
    this.http.post<Customer>("https://localhost:44336/api/Customers/",this.newCustomer, options).subscribe()
  }

  delete(){
    this.http.delete<Customer>("https://localhost:44336/api/Customers/3").subscribe();
  }



}
