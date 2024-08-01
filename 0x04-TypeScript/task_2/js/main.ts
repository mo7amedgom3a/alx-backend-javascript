export interface DirectorInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}
export interface TeacherInterface extends DirectorInterface{}
export class Director implements DirectorInterface{
    workFromHome(): string{
        return 'Working from home';
    }
    getCoffeeBreak(): string{
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string{
        return 'Getting to Director tasks';
    }
}
export class Teacher implements TeacherInterface{
    workFromHome(): string{
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string{
        return 'Cannot have a break';
    }
    workDirectorTasks(): string{
        return 'Getting to work';
    }
}
export function createEmployee(salary: number | string): Director | Teacher{
    if(typeof salary === 'number' && salary < 500){
        return new Teacher();
    } else {
        return new Director();
    }
}
export function isDirector(employee: (Director | Teacher)) {
    return employee instanceof Director;
  }
export function executeWork(employee: Director | Teacher){
    if(employee instanceof Director){
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workFromHome());
    }
}
export type Subjects = 'Math' | 'History';
export function teachClass(todayClass: Subjects){
    if(todayClass === 'Math'){
        return 'Teaching Math';
    } else {
        return 'Teaching History';
    }
}