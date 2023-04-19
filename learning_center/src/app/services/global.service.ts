import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost:3000/api/"
  getAllCourses(): Observable<any> {
    return this.http.get(`${this.baseUrl}course/showAllCourses`)
  }
  getCourseDetails(postId: any): Observable<any> {
    return this.http.get(`${this.baseUrl}course/showCourse/${postId}`)
  }
}
