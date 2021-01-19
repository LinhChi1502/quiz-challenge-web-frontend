import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUserExamComponent } from './detail-user-exam.component';

describe('DetailUserExamComponent', () => {
  let component: DetailUserExamComponent;
  let fixture: ComponentFixture<DetailUserExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailUserExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailUserExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
