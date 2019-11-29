import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListAddFormComponent } from './to-do-list-add-form.component';

describe('ToDoListAddFormComponent', () => {
  let component: ToDoListAddFormComponent;
  let fixture: ComponentFixture<ToDoListAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
