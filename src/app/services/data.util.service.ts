import { DepartmentModel } from '../interfaces/department-model';
import { Department, Employee } from '../models/department.model';

export const departmentsData: DepartmentModel[] = [
  {
    name: 'Developer',
    employees: [
      {
        first_name: 'Tim',
        last_name: 'Webbs',
        dob: new Date(1314211127),
        speciality: 'Java developer'
      },
      {
        first_name: 'John',
        last_name: 'Harrick',
        dob: new Date(1175714200),
        speciality: 'Java'
      },
      {
        first_name: 'Paul',
        last_name: 'Finn',
        dob: new Date(1175714200),
        speciality: 'Java'
      },
      {
        first_name: 'Brett',
        last_name: 'Halpin',
        dob: new Date(1175714200),
        speciality: 'Java'
      }
    ]
  },
  {
    name: 'Business',
    employees: [
      {
        first_name: 'Guru',
        last_name: 'Samrudh',
        dob: new Date(1175714200),
        speciality: 'Accounting'
      },
      {
        first_name: 'Will',
        last_name: 'Webs',
        dob: new Date(1175714200),
        speciality: 'Accounting'
      },
      {
        first_name: 'Sam',
        last_name: 'Jutoor',
        dob: new Date(1175714200),
        speciality: 'Accounting'
      },
      {
        first_name: 'Julie',
        last_name: 'Brauer',
        dob: new Date(1175714200),
        speciality: 'Accounting'
      }
    ]
  },
  {
    name: 'Operations',
    employees: [
      {
        first_name: 'Ravi',
        last_name: 'Kiran',
        dob: new Date(1175714200),
        speciality: 'DevOps'
      },
      {
        first_name: 'Joyce',
        last_name: 'Dhee',
        dob: new Date(1175714200),
        speciality: 'DevOps'
      },
      {
        first_name: 'Budha',
        last_name: 'Aditya',
        dob: new Date(1175714200),
        speciality: 'DevOps'
      },
      {
        first_name: 'Samantha',
        last_name: 'Thomas',
        dob: new Date(1175714200),
        speciality: 'DevOps'
      }
    ]
  }
];

export const allDepartmentsData: Department = new Department('Departments', [
    new Employee('Developer', [
      {
        first_name: 'Tim',
        last_name: 'Webbs',
        dob: new Date(1175714200),
        speciality: 'Java developer'
      },
      {
        first_name: 'John',
        last_name: 'Harrick',
        dob: new Date(1175714200),
        speciality: 'Java'
      },
      {
        first_name: 'Paul',
        last_name: 'Finn',
        dob: new Date(1175714200),
        speciality: 'Java'
      },
      {
        first_name: 'Brett',
        last_name: 'Halpin',
        dob: new Date(1175714200),
        speciality: 'Java'
      }
    ]),
    new Employee('Business', [
      {
        first_name: 'Guru',
        last_name: 'Samrudh',
        dob: new Date(1175714200),
        speciality: 'Accounting'
      },
      {
        first_name: 'Will',
        last_name: 'Webs',
        dob: new Date(1175714200),
        speciality: 'Accounting'
      },
      {
        first_name: 'Sam',
        last_name: 'Jutoor',
        dob: new Date(1175714200),
        speciality: 'Accounting'
      },
      {
        first_name: 'Julie',
        last_name: 'Brauer',
        dob: new Date(1175714200),
        speciality: 'Accounting'
      }
    ]),
    new Employee('Operations', [
      {
        first_name: 'Ravi',
        last_name: 'Kiran',
        dob: new Date(1175714200),
        speciality: 'DevOps'
      },
      {
        first_name: 'Joyce',
        last_name: 'Dhee',
        dob: new Date(1175714200),
        speciality: 'DevOps'
      },
      {
        first_name: 'Budha',
        last_name: 'Aditya',
        dob: new Date(1175714200),
        speciality: 'DevOps'
      },
      {
        first_name: 'Samantha',
        last_name: 'Thomas',
        dob: new Date(1175714200),
        speciality: 'DevOps'
      }
    ])
]);
