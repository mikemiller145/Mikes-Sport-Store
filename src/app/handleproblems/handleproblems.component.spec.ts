import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleproblemsComponent } from './handleproblems.component';

describe('HandleproblemsComponent', () => {
  let component: HandleproblemsComponent;
  let fixture: ComponentFixture<HandleproblemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleproblemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleproblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
