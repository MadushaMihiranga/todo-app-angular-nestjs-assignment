import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoUpdateDuedateFormComponent } from './todo-update-duedate-form.component';

describe('TodoUpdateDuedateFormComponent', () => {
  let component: TodoUpdateDuedateFormComponent;
  let fixture: ComponentFixture<TodoUpdateDuedateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoUpdateDuedateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoUpdateDuedateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
