export interface Employee {
  first_name?: string;
  last_name?: string;
  dob?: Date;
  speciality?: string;
}

export interface DepartmentModel {
  name?: string;
  employees?: Employee[];
}
