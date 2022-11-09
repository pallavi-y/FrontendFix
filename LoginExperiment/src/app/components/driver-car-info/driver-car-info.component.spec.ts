import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { DriverCarInfoComponent } from './driver-car-info.component';

describe('DriverCarInfoComponent', () => {
  let component: DriverCarInfoComponent;
  let fixture: ComponentFixture<DriverCarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule],
      declarations: [ DriverCarInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverCarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
