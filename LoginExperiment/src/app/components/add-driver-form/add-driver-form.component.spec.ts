import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AddDriverFormComponent } from './add-driver-form.component';

describe('AddDriverFormComponent', () => {
  let component: AddDriverFormComponent;
  let fixture: ComponentFixture<AddDriverFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule,ReactiveFormsModule],
      declarations: [ AddDriverFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDriverFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
