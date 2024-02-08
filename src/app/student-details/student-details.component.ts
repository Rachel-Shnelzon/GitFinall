import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../models/student.model';
@Component({
  selector: 'student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  @Input()
  student?: Student;

  @Output()
  onSaveNewStudent: EventEmitter<Student> = new EventEmitter();
  SaveNewStudent() {
    this.onSaveNewStudent.emit(this.student);
  }
}
