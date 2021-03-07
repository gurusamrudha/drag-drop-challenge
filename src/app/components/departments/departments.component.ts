import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import { DepartmentModel } from 'src/app/interfaces/department-model';
import { DepartmentsService } from 'src/app/services/departments.service';
import { Department } from 'src/app/models/department.model';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  allDepartmentsData: DepartmentModel[];
  newAllDepartmentsData: Department;

  constructor(private api: DepartmentsService) { }

  ngOnInit(): void {
    // Loads data only once when we load this app.
    this.allDepartmentsData = this.api.getDepartmentsData();

    this.newAllDepartmentsData = this.api.getAllDepartmentsData();
  }

  // This void function does the magic of reordering
  onDrop(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }

}
