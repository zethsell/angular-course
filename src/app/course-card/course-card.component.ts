import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList, TemplateRef } from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {
  @Input({ required: true })
  course: Course

  @Input()
  noImageTpl: TemplateRef<any>

  @Input()
  cardIndex: number

  @Output('couseSelected')
  courseEmitter = new EventEmitter<Course>()

  @ContentChildren(CourseImageComponent, { read: ElementRef })
  images: QueryList<CourseImageComponent>

  ngAfterViewInit(): void {

  }

  ngAfterContentInit(): void {
    console.log(this.images)
  }

  onCourseViewed() {
    console.log("card component - button clicked")
    this.courseEmitter.emit(this.course)
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner'
    }
  }
}
