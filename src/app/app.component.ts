import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  courses = COURSES

  // @ViewChild('cardRef', { read: ElementRef })
  // card: ElementRef

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<ElementRef>

  constructor() {
  }

  ngAfterViewInit(): void {
    this.cards.changes.subscribe(
      cards => console.log(cards)
    )
    // console.log('cards', this.cards.changes)



  }


  onCoursesEdited() {
    this.courses.push(this.courses[0])
  }

  // title = COURSES[0].description

  // price = 9.99

  // rate = 0.67

  // course = COURSES[0]

  startDate = new Date(2000, 0, 1)
  onCourseSelected(course: Course) {
    // console.log("App component - click event bubbled....", course)
    // console.log('containerDiv', this.containerDiv)
  }

}
