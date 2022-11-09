import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { DriverPageComponent } from './driver-page.component';

describe('DriverPageComponent', () => {
  let component: DriverPageComponent;
  let fixture: ComponentFixture<DriverPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule],
      declarations: [ DriverPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
