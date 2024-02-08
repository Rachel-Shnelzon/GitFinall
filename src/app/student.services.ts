import { Injectable } from "@angular/core";
import { Student } from "./models/student.model";
const STUDENTSLIST: Student[] = [
    {
        id: 123456789, name: "Tamar", address: "Rabi Akiva 5", phone: "987654321", active: true,
        avgOfMarks: 99, dateGo: new Date(), testList: [{ id: 1, mark: 100 }, { id: 3, mark: 99 }]
    },
    {
        id: 234567890, name: "Leha", address: "Rabi Tarfon 8", phone: "876543219", active: true,
        avgOfMarks: 98, dateGo: new Date()
    },
    {
        id: 345678901, name: "Ayala", address: "Hamakabim 56", phone: "765432198", active: false,
        avgOfMarks: 87, dateGo: new Date(2023, 7, 1)
    }];

@Injectable()
export class StudentService {
    getStudents(): Student[] {
        return STUDENTSLIST;
    }
    getStudentPromise(): Promise<Student[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(STUDENTSLIST);
            }, 3000)
        });
    }
    getAvgOfStudent(id: number): number {
        let index = STUDENTSLIST.findIndex(s => s.id == id);
        let sum = 0;
        if (index == -1 || STUDENTSLIST[index].testList.length == 0)
            return 0;
        for (let i = 0; i < STUDENTSLIST[index].testList.length; i++) {
            sum += STUDENTSLIST[index].testList[i].mark;
        }
        return sum / STUDENTSLIST[index].testList.length;
    }
    getTotalAbsence(id: number): number {
        let index = STUDENTSLIST.findIndex(s => s.id == id);
        if (index == -1 || STUDENTSLIST[index].absentDays == undefined)
            return 0;
        let sum = 0;
        for (let i = 0; i < STUDENTSLIST[index].absentDays.length; i++) {
            sum += STUDENTSLIST[index].absentDays[i].missingDays;
        }
        return sum;
    }
}