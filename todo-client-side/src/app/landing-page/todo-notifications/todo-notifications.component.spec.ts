import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoNotificationsComponent } from './todo-notifications.component';

describe('TodoNotificationsComponent', () => {
  let component: TodoNotificationsComponent;
  let fixture: ComponentFixture<TodoNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
