import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionMultipleMulAnsComponent } from './create-question-multiple-mul-ans.component';

describe('CreateQuestionMultipleMulAnsComponent', () => {
  let component: CreateQuestionMultipleMulAnsComponent;
  let fixture: ComponentFixture<CreateQuestionMultipleMulAnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuestionMultipleMulAnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuestionMultipleMulAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
