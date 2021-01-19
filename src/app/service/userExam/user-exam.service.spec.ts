import { TestBed } from '@angular/core/testing';

import { UserExamService } from './user-exam.service';

describe('UserExamService', () => {
  let service: UserExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
