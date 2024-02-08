import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StudentsListComponent } from "./students-list/students-list.component";
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FormStudentComponent } from './form-student/form-student.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TestsListComponent } from './tests-list/tests-list.component';
import { StudentService } from "./student.services";
import { GitTamarComponent } from './git-tamar/git-tamar.component';

@NgModule({
    declarations:[AppComponent,StudentsListComponent, StudentDetailsComponent, FormStudentComponent, TestsListComponent, GitTamarComponent],
    imports:[BrowserModule, FormsModule, ReactiveFormsModule],
    providers:[StudentService],
    bootstrap:[AppComponent]
})
export class AppModule{

}