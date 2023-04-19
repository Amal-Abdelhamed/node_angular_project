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
  constructor(private global: GlobalService, private _activatedRout: ActivatedRoute) {
    this.id = this._activatedRout.snapshot.paramMap.get('courseId')
    global.getCourseDetails(this.id).subscribe(res => {
      this.course = res.data

    }, (e) => {
      console.log(e.message);

    }, () => {
      this.loadingFlag = false

    }
    )
  }


}
