import { Injectable } from '@angular/core';

import { DepartmentModel } from '../interfaces/department-model';
import { Department } from '../models/department.model';

import { allDepartmentsData, departmentsData } from './data.util.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor() { }

  /**
   * This function would be used to fetch data from API call
   * @returns department data from the Util file. This could return an Observable on the real http call
   */

  getDepartmentsData(): DepartmentModel[] {
    return departmentsData;
  }

  // Currently not using this function but this is just an exmple to show different methods to achive this problem.
  getAllDepartmentsData(): Department {
    return allDepartmentsData;
  }

}
