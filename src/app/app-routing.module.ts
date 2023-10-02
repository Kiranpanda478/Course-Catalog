import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './Components/course-list/course-list.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
const routes: Routes = [
  { path: '', component: CourseListComponent },
  { path: 'user', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
