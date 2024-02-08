import { AbsentDays } from "./absentDays.model";
import { Test } from "./test.model";

export class Student {
   id: number;
   name: string;
   address: string;
   phone: string;
   active: Boolean;
   avgOfMarks: number;
   dateGo?: Date;
   maslool?: number;
   year?: MyYear;
   testList?: Test[];
   absentDays?: AbsentDays[];
   constructor(id: number, name: string, address: string, phone: string, active: boolean, avgOfMarks: number) {
      this.id = id;
      this.name = name;
      this.address = address;
      this.phone = phone;
      this.active = active;
      this.avgOfMarks = avgOfMarks;
      this.dateGo = new Date();
   }

}
export enum MyYear {
   A = 1,
   B = 2,
   C = 3
}