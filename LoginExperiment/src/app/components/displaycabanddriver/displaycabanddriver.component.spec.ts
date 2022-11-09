import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { DisplaycabanddriverComponent } from './displaycabanddriver.component';

describe('DisplaycabanddriverComponent', () => {
  let component: DisplaycabanddriverComponent;
  let fixture: ComponentFixture<DisplaycabanddriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule],
      declarations: [ DisplaycabanddriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaycabanddriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
