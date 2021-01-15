import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionMultipleOneAnsComponent } from './create-question-multiple-one-ans.component';

describe('CreateQuestionMultipleOneAnsComponent', () => {
  let component: CreateQuestionMultipleOneAnsComponent;
  let fixture: ComponentFixture<CreateQuestionMultipleOneAnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuestionMultipleOneAnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuestionMultipleOneAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
