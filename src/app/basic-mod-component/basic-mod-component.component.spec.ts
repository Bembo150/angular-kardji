import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicModComponentComponent } from './basic-mod-component.component';

describe('BasicModComponentComponent', () => {
  let component: BasicModComponentComponent;
  let fixture: ComponentFixture<BasicModComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicModComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicModComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
