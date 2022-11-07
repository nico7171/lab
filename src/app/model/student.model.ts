import { studentService } from "../service/student.service";

export interface Student {
    name: string | null;
    age: number | string | null;
}