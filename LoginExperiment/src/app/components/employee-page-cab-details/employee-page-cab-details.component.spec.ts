import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { EmployeePageCabDetailsComponent } from './employee-page-cab-details.component';

describe('EmployeePageCabDetailsComponent', () => {
  let component: EmployeePageCabDetailsComponent;
  let fixture: ComponentFixture<EmployeePageCabDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule],
      declarations: [ EmployeePageCabDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePageCabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
