import { TestBed } from '@angular/core/testing';
import { allDepartmentsData, departmentsData } from './data.util.service';

import { DepartmentsService } from './departments.service';

describe('DepartmentsService', () => {
  let service: DepartmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have same data imported from data util page for `allDepartmentsData`', () => {
    expect(service.getAllDepartmentsData()).toEqual(allDepartmentsData);
  });

  it('should have same data imported from data util page `departmentsData`', () => {
    expect(service.getDepartmentsData()).toEqual(departmentsData);
  });
});
