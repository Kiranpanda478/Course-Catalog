import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/Service/httpservice.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor(private router: Router, private http: HttpserviceService) { }
  ngOnInit(): void {
    this.getusers();
    this.listeduser()
    this.courseget()
  }


  users: any
  userdata: any
  courselist: any
  u_id: any
  c_id: any;
  progress: any;
  fname: string = "";
  mobile: string = ''
  email: string = '';
  address: string = '';
  getusers() {
    this.http.Usercourselist().subscribe(res => {
      this.users = res;
      this.users = this.users.data;
    })
  }
  getusername(event: any) {
    this.u_id = event.target.value
  }
  getcoursename(event: any) {
    this.c_id = event.target.value
  }
  onClickSubmit(event: any) {
    this.progress = event.value

    this.http.Addusercourse(this.u_id, this.c_id, this.progress).subscribe(res => {
     
      this.getusers();
    })
  }
  courseget() {
    this.http.Courselist().subscribe(res => {
      this.courselist = res;
      this.courselist = this.courselist.data;
    })
  }

  listeduser() {
    this.http.Listeduser().subscribe(res => {
      this.userdata = res;
      this.userdata = this.userdata.data;
    
    })
  }

  submit() {
    this.http.Addnewuser(this.fname, this.mobile, this.email, this.address).subscribe(res => {
    
      this.fname = '';
      this.email = '';
      this.mobile = '';
      this.address = '';
    })
    this.listeduser();

  }
  enroll(event: any, value: any) {
  
    if (value == 0) { value = 1; } else { value = 0; }

    this.http.Statusupdate(event, value).subscribe(res => {
      this.getusers();
    })
  }
}