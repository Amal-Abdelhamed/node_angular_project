import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditCourseComponent } from './pages/edit-course/edit-course.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'addCourse', component: AddCourseComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'editCourse', component: EditCourseComponent },
  { path: 'editProfile', component: EditProfileComponent },
  { path: 'dashboard', component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
