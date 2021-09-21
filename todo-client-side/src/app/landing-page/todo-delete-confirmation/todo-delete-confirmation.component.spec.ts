import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDeleteConfirmationComponent } from './todo-delete-confirmation.component';

describe('TodoDeleteConfirmationComponent', () => {
  let component: TodoDeleteConfirmationComponent;
  let fixture: ComponentFixture<TodoDeleteConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDeleteConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
