import { Component, Input } from '@angular/core';
import { Test } from '../models/test.model';
import { Student } from '../models/student.model';
import { StudentService } from '../student.services';

@Component({
  selector: 'tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.css']
})
export class TestsListComponent {
  constructor(public studentService: StudentService) {

  }
  @Input()
  testsList?: Test[] = undefined;
  @Input()
  student?: Student;
  //avg:number=this._studentService.getAvgOfStudent(student.id);
}
