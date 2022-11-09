import { EmailValidator } from "@angular/forms";
import { studentService } from "../service/student.service";

export interface Student {
    name: string | null;
    //age: number | string | null;
    birthday: Date;
    gender: string; //option(male/female),
    address: string; //text area
    phone: string;
    email: string;
}