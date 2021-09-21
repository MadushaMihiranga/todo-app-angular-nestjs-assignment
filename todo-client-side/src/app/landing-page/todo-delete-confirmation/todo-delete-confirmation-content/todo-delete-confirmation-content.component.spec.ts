import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDeleteConfirmationContentComponent } from './todo-delete-confirmation-content.component';

describe('TodoDeleteConfirmationContentComponent', () => {
  let component: TodoDeleteConfirmationContentComponent;
  let fixture: ComponentFixture<TodoDeleteConfirmationContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDeleteConfirmationContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDeleteConfirmationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
