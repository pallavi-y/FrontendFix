import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AssigncabtodriverComponent } from './assigncabtodriver.component';

describe('AssigncabtodriverComponent', () => {
  let component: AssigncabtodriverComponent;
  let fixture: ComponentFixture<AssigncabtodriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule],
      declarations: [ AssigncabtodriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssigncabtodriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
