import { Employee as EmployeeModel} from '../interfaces/department-model';

export class Department {
  constructor(public name: string, public employees: Employee[]) {}
}

export class Employee {
  constructor(
    public name: string,
    public employee: EmployeeModel[]) {}

}
