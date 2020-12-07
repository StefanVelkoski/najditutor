
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer, Tutor, Review, Announcement} from '../shared/appmodels.model'

@Injectable()
export class DataService {
  url = "https://localhost:44336/api/"

  constructor(private http: HttpClient){}

  getAnnouncements(){
    return this.http.get<Announcement[]>(this.url + "Announcements");
  }

  getTutors(){
    return this.http.get<Tutor[]>(this.url + "Tutors");
  }

  getCustomers(){
    return this.http.get<Customer[]>(this.url + "Customers");
  }

  getReviews(){
    return this.http.get<Review[]>(this.url + "Reviews");
  }

  addCustomer(newCustomer){
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'})}
    this.http.post<Customer>(this.url + "Customers", newCustomer, options).subscribe()
  }

  addAnnouncement(newAnnouncement){
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'})}
    this.http.post<Announcement>(this.url + "Announcements", newAnnouncement, options).subscribe()
  }

  addTutor(newTutor){
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'})}
    this.http.post<Tutor>(this.url + "Tutors", newTutor, options).subscribe()
  }

  addReview(){

  }

  deleteAnnouncement(id){
    this.http.delete<Announcement>(this.url+"Announcements").subscribe();
  }

}
