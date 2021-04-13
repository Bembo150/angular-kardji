import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonSwitchComponent } from './lesson-switch.component';

describe('LessonSwitchComponent', () => {
  let component: LessonSwitchComponent;
  let fixture: ComponentFixture<LessonSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
