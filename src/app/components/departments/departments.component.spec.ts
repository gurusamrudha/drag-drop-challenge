import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { departmentsData } from 'src/app/services/data.util.service';

import { DepartmentsComponent } from './departments.component';

describe('DepartmentsComponent', () => {
  let component: DepartmentsComponent;
  let fixture: ComponentFixture<DepartmentsComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Drag and drop example'`, () => {
    const title = el.query(By.css('.container h2')).nativeElement as HTMLElement;
    expect(title.textContent.trim()).toContain('Drag and drop example');
  });

  it('should have same data imported from data util page', () => {
    expect(component.allDepartmentsData).toEqual(departmentsData);
  });
});
