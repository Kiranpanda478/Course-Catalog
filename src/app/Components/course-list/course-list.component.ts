import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/Service/httpservice.service';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  constructor(private router: Router, private http: HttpserviceService) {

  }
  list: boolean = true;
  srch: boolean = false
  srchdata: any;
  courselist: any;

  ngOnInit(): void {
    this.courseget();
  }
  courseget() {
    this.http.courselist().subscribe(res => {
      this.courselist = res;
      this.courselist = this.courselist.data;
    })
  }
  search(event: any) {
    console.log(event.target.value, "value")
    this.srch = true;
    this.list = false;
    console.log(event.target.value.length, "length")

    this.http.search(event.target.value).subscribe(res => {
      this.srchdata = res
      this.srchdata = this.srchdata.data
      if (event.target.value > 0) {
        this.srch = false;
        this.list = true;
        this.courseget();
      }
    })
  }
  sort(event: any) {
    console.log(event.target.value)
    this.http.sort(event.target.value).subscribe(res => {
      this.courselist = res;
      this.courselist = this.courselist.data;
    })
  }
  user() {
    console.log("ddddddddddddddd")
    this.router.navigate(['/user'])
  }

}
