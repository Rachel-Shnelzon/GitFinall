import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../student.services';
@Component({
  selector: 'students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})

export class StudentsListComponent implements OnInit {
  constructor(public studentService: StudentService) {
  }
  ngOnInit(): void {
    this.studentService.getStudentPromise().then(data => this.studentsList = data).
      catch(error => console.log(error));
  }
  selectedStudent?: Student;
  studentsList: Student[];

  @Output()
  onDelete: EventEmitter<number> = new EventEmitter();

  deleteStudent(id: number) {
    let index = this.studentsList.findIndex(s => s.id == id);
    this.studentsList.splice(index, 1);
    if (this.selectedStudent.id == id)
      this.selectedStudent = undefined;
    this.onDelete.emit(id);
  }
  selectStudent(selectedStudent: Student) {
    this.selectedStudent = selectedStudent;
  }
  AddStudent() {
    this.selectedStudent = new Student(0, "new Student", "address", "phone", true, 0);
  }
  SaveStudentToList(student: Student) {
    if (student.id == 0) {
      student.id = this.studentsList[this.studentsList.length - 1].id + 1;
      this.studentsList.push(student);
      alert("You seccess to add the student!")
    }
    else {
      let studentToUpdate = this.studentsList.filter(s => s.id == student.id)[0];
      let index = this.studentsList.indexOf(studentToUpdate);
      this.studentsList[index] = student;
      alert("The update seccess!");
    }
    console.log(student.absentDays);
    this.selectedStudent = undefined;
  }
  needHelp() {
    alert("You need help?");
  }

  @Output()
  onSelectStudentLine: EventEmitter<Student> = new EventEmitter();
  SelectStudentLine(student: Student) {
    this.onSelectStudentLine.emit(student);
  }
}