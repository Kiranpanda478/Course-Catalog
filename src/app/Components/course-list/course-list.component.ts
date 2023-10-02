import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  constructor(private router:Router){

  }
courselist = [{
  title:"bca",
  description:"Some quick example text to build on the card title and make up the bulk of the card's content",
  instructor: "instructor",
  rating:"5star"
},
{
  title:"bca",
  description:"jSome quick example text to build on the card title and make up the bulk of the card's content",
  instructor: "instructor",
  rating:"5star"
},
{
  title:"bca",
  description:"jSome quick example text to build on the card title and make up the bulk of the card's content",
  instructor: "instructor",
  rating:"5star"
},
{
  title:"bca",
  description:"Some quick example text to build on the card title and make up the bulk of the card's content",
  instructor: "instructor",
  rating:"5star"
},
{
  title:"bca",
  description:"jSome quick example text to build on the card title and make up the bulk of the card's content",
  instructor: "instructor",
  rating:"5star"
}]

user(){
  console.log("ddddddddddddddd")
  this.router.navigate(['/user'])
}
}
