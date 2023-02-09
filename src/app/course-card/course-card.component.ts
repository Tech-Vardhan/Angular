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

  @Input()
  cardIndex : number;
  
  @Output('courseSelected')
  courseSelected  = new EventEmitter<Course>();
  
  onCourseView(){
    console.log("Click");
    this.courseSelected.emit(this.course);
  }
  // if(this.course.category = BEGINNER)
  // {
  //   beginner':true,'course-card':true
  // }
  cardClasses(){
    if(this.course.category=='BEGINNER'){
      return('beginner')
    }
  }
  

}
function output() {
  throw new Error('Function not implemented.');
}

