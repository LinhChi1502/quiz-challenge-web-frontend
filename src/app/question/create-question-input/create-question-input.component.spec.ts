import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionInputComponent } from './create-question-input.component';

describe('CreateQuestionInputComponent', () => {
  let component: CreateQuestionInputComponent;
  let fixture: ComponentFixture<CreateQuestionInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuestionInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuestionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
