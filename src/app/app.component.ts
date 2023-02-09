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
  
  // onAppclick(){
  //   console.log("App click");
  // }
  onCourseSelected(course : Course){
    console.log(course);
  }
  
  
}
