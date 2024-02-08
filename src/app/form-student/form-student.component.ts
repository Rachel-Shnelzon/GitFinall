import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyYear, Student } from '../models/student.model'
import { LAERN_ARR, Learn } from '../models/learn.model';
import { AbsentDays } from '../models/absentDays.model';
import { StudentService } from '../student.services';

@Component({
  selector: 'form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent {

  constructor(private _studentService: StudentService) {

  }
  totalMissing: number ;
  missingFromDays?: Date;
  missingDays?: number;
  absentDays: AbsentDays[] = [new AbsentDays()];

  learnList: Learn[] = LAERN_ARR;
  myYear = MyYear;
  private _student?: Student;
  studentForm: FormGroup = new FormGroup({});

  public get student(): Student | undefined {
    return this._student;
  }

  @Input()
  public set student(value: Student | undefined) {
    this._student = value;
    if (this._student != undefined) {
      this.studentForm = new FormGroup({
        "id": new FormControl(this.student.id),
        "name": new FormControl(this.student.name, [Validators.minLength(2), Validators.required]),
        "address": new FormControl(this.student.address),
        "phone": new FormControl(this.student.phone, [Validators.required, Validators.maxLength(10)]),
        "active": new FormControl(this.student.active),
        "avgOfMarks": new FormControl(this.student.avgOfMarks),
        "dateGo": new FormControl(this.student.dateGo),
        "maslool": new FormControl(this.student.maslool, [Validators.required]),
        "year": new FormControl(this.student.year),
        "testList": new FormControl(this.student.testList)
      });
      this.totalMissing=this._studentService.getTotalAbsence(this._student.id);
    }
  }
  @Output()
  onSaveStudent: EventEmitter<Student> = new EventEmitter();
  SaveNewStudent() {
    if (this.missingFromDays && this.missingDays && this.missingDays > 0) {
      if (this._student.absentDays == undefined) {
        this.absentDays[0].missingFromDate = this.missingFromDays;
        this.absentDays[0].missingDays = this.missingDays;
        this._student.absentDays = this.absentDays;
      } else
        this._student.absentDays.push({ missingFromDate: this.missingFromDays, missingDays: this.missingDays });
      this.missingFromDays = undefined;
      this.missingDays = undefined;
    }
    this.absentDays = this._student.absentDays;
    this._student = this.studentForm.value;
    this._student.absentDays = this.absentDays;
    this.onSaveStudent.emit(this._student);
  }

  @Output()
  onFirstFocus: EventEmitter<any> = new EventEmitter();
  firstFocus: boolean = false;
  FirstFocus() {
    if (this.firstFocus == false) {
      this.onFirstFocus.emit();
      this.firstFocus = true;
    }
  }
}
