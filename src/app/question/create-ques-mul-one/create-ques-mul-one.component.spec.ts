import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuesMulOneComponent } from './create-ques-mul-one.component';

describe('CreateQuesMulOneComponent', () => {
  let component: CreateQuesMulOneComponent;
  let fixture: ComponentFixture<CreateQuesMulOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuesMulOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuesMulOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
