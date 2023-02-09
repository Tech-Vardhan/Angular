import { Component, Input,Output,EventEmitter } from '@angular/core';



import { Course } from '../model/course';


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  
  @Input()
  course:Course;
  
  @Output()
  courseSelected = new EventEmitter<Course>();

  // onCourseSelected(){
  //   console.log("From Child");
  
  // }
  
  onCourseViewed(){
    console.log("Click");
    this.courseSelected.emit(this.course);
  }
  // onCourseClick(){
 
  //   console.log("click");
  // }
  
}
function output() {
  throw new Error('Function not implemented.');
}

