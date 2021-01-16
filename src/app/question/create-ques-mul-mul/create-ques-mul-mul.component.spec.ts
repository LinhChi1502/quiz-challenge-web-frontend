import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuesMulMulComponent } from './create-ques-mul-mul.component';

describe('CreateQuesMulMulComponent', () => {
  let component: CreateQuesMulMulComponent;
  let fixture: ComponentFixture<CreateQuesMulMulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuesMulMulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuesMulMulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
