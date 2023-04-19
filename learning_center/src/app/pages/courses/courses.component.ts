import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses: any = []
  loadingFlag = true

  constructor(private global: GlobalService) {

    this.global.getAllCourses().subscribe(res => {
      this.courses = res.data
    }, (e) => {
      console.log(e.message);

    }, () => {
      this.loadingFlag = false

    }
    )
  }


}


