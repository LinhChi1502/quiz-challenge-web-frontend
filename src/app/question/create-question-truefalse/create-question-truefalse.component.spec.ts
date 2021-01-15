import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionTruefalseComponent } from './create-question-truefalse.component';

describe('CreateQuestionTruefalseComponent', () => {
  let component: CreateQuestionTruefalseComponent;
  let fixture: ComponentFixture<CreateQuestionTruefalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuestionTruefalseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuestionTruefalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
