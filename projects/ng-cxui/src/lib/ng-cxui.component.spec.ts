import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCxuiComponent } from './ng-cxui.component';

describe('NgCxuiComponent', () => {
  let component: NgCxuiComponent;
  let fixture: ComponentFixture<NgCxuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCxuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCxuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
