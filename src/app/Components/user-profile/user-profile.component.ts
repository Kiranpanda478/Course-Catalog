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

  // users = [{
  //   username:"hiii",
  //   courses:"fsdd,sfdfds",
  //   progress:"50"
  // },
  // {
  //   username:"hiii",
  //   courses:"fsdd,sfdfds",
  //   progress:"50"
  // },
  // {
  //   username:"hiii",
  //   courses:"fsdd,sfdfds",
  //   progress:"50"
  // },
  // {
  //   username:"hiii",
  //   courses:"fsdd,sfdfds",
  //   progress:"50"
  // },
  // {
  //   username:"hiii",
  //   courses:"fsdd,sfdfds",
  //   progress:"50"
  // },
  // {
  //   username:"hiii",
  //   courses:"fsdd,sfdfds",
  //   progress:"50"
  // },
  // {
  //   username:"hiii",
  //   courses:"fsdd,sfdfds",
  //   progress:"50"
  // },
  // ]
  users: any
  userdata: any
  courselist: any
  u_id: any
  c_id: any;
  progress: any;
  fname:string = "";
  mobile:string = ''
  email:string = '';
  address:string = '';
  getusers() {
    this.http.usercourselist().subscribe(res => {
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
    console.log(this.u_id,this.c_id,this.progress)
    this.http.addusercourse(this.u_id,this.c_id,this.progress).subscribe(res =>{
      console.log(res)
      this.getusers();
    })
  }
  courseget() {
    this.http.courselist().subscribe(res => {
      this.courselist = res;
      this.courselist = this.courselist.data;
    })
  }

  listeduser() {
    this.http.listeduser().subscribe(res => {
      this.userdata = res;
      this.userdata = this.userdata.data;
      console.log(this.userdata, "lllllllllllll")
    })
  }
    
 submit(){
  this.http.addnewuser(this.fname ,this.mobile,this.email,this.address).subscribe(res => {
    console.log(res,"hjhjhjh")
    this.fname ='';
    this.email = '';
    this.mobile ='';
    this.address = '';
 })
 this.listeduser();

}
}