import { Component } from "@angular/core";
import { Student } from "./models/student.model";
import { Test } from "./models/test.model";

@Component({
    templateUrl: './app.component.html',
    selector: "my-app-root",
})

export class AppComponent {

    studentListTests?: Student;
    testsList: Test[];
    title: string = "Hello My-App";

    calc() {
        let date = new Date();
        if (date.getHours() >= 4 && date.getHours() < 12)
            return "good morning!";
        if (date.getHours() >= 12 && date.getHours() < 18)
            return "good afternoon!";
        return "good evening!";
    }
    constructor() {

    }
    selectStudentShowTests(student: Student) {
        this.studentListTests = student;
        this.testsList = this.studentListTests.testList;
    }
    delete(id: number) {
        if (this.studentListTests.id == id) {
            this.studentListTests = undefined;
            this.testsList = undefined;
        }
    }
}