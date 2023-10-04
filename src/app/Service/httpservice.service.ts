import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  baseurl = "http://localhost:4000/"
  constructor(private http: HttpClient) { }
  courselist() {
    return this.http.get(this.baseurl + "course")
  }

  search(search: any) {
    return this.http.post(this.baseurl + "search_filter", { search })
  }

  sort(sort: any) {
    return this.http.post(this.baseurl + "sort_filter", { sort })
  }

  usercourselist() {
    return this.http.get(this.baseurl + "user_course")
  }
  //Existing users
  listeduser() {
    return this.http.get(this.baseurl + "user_list")
  }
  addusercourse(user_id: any,
    course_id: any,
    progress: any) {
    return this.http.post(this.baseurl + "user_to_course", { user_id, course_id, progress })

  }
  statusupdate(id: any,
    status: any) {
    return this.http.post(this.baseurl + "user_course_status", { id, status })

  }

  addnewuser(name: any, mobile: any, email: any, address: any) {
    return this.http.post(this.baseurl + "user_create", { name, mobile, email, address })
  }

}
