import { TestBed } from '@angular/core/testing';

import { TodoDeleteConfirmationService } from './todo-delete-confirmation.service';

describe('TodoDeleteConfirmationService', () => {
  let service: TodoDeleteConfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoDeleteConfirmationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
