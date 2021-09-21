import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoUpdateDuedateComponent } from './todo-update-duedate.component';

describe('TodoUpdateDuedateComponent', () => {
  let component: TodoUpdateDuedateComponent;
  let fixture: ComponentFixture<TodoUpdateDuedateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoUpdateDuedateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoUpdateDuedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
