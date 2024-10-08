interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any; // Allows for any other properties like phone number or email or contact info ...
}
interface Directors extends Teacher{
    numberOfReports: number;
}
interface printTeacherFunction{
    (firstName: string, lastName: string): string;
}
export const printTeacher: printTeacherFunction = function(firstName: string, lastName: string): string{
    return `${firstName.charAt(0)}. ${lastName}`;
}
export interface IstudentClass{
    workOnHomework(): string;
    displayName(): string;
}
export class StudentClass implements IstudentClass{
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string{
        return 'Currently working';
    }
    displayName(): string{
        return this.firstName;
    }
}
