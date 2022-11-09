import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { delay } from 'rxjs';
import { VerifysignupComponent } from './verifysignup.component';
import * as Rx from 'rxjs';
describe('VerifysignupComponent', () => {
  let component: VerifysignupComponent;
  let fixture: ComponentFixture<VerifysignupComponent>;
  

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,FormsModule],
      declarations: [ VerifysignupComponent ]
    })
    .compileComponents();

  

    fixture = TestBed.createComponent(VerifysignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('User Not Exists', () => {

    expect(component.Exists).toBe(false);
  });

  it('User Not Already Registered', () => {

    expect(component.Found).toBe(false);
  });

  it('should call getPostDetails and get response as empty array', fakeAsync(() => {
    const fixture = TestBed.createComponent(VerifysignupComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(VerifysignupComponent);
    let spy_getPosts = spyOn(service, component.service.getemail()).and.callFake(() => {
      return Rx.of([]).pipe(delay(100));
    });
    component.service.getemail();
    tick(100);
    expect(component.service.getemail()).toEqual([]);
  })) 
});
