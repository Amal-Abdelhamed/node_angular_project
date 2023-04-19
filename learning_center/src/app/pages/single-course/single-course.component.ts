import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css']
})
export class SingleCourseComponent {
  course: any
  loadingFlag = true
  id: any
  courses: any = []

  constructor(private global: GlobalService, private _activatedRout: ActivatedRoute) {
    this._activatedRout.paramMap.subscribe(params => {
      this.id = params.get('courseId')

      global.getCourseDetails(this.id).subscribe(res => {
        this.course = res.data

      }, (e) => {
        console.log(e.message);

      }, () => {
        this.loadingFlag = false

      }
      )
    })
    this.global.getAllCourses().subscribe(res => {
      this.courses = res.data
    })
  }

}
