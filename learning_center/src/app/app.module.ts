import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { FormComponent } from './components/form/form.component';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SingleCourseComponent } from './pages/single-course/single-course.component';
import { SingleUserComponent } from './pages/single-user/single-user.component';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CoursesComponent,
    ContactUsComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    EditProfileComponent,
    AddCourseComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    FormComponent,
    AddStudentComponent,
    SpinnerComponent,
    SingleCourseComponent,
    SingleUserComponent,
    MyCoursesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
