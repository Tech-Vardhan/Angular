import { Component } from '@angular/core';
import { concat } from 'rxjs';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  courses = COURSES;
  // title = COURSES[0].description;
  // startDate  = new Date(20,0,1);
  // price = 99.9999;
  // rate = 0.76
  
  // onAppclick(){
  //   console.log("App click");
  // }
  onCourseSelected(course : Course){
    console.log(course);
  }
  
  
}
