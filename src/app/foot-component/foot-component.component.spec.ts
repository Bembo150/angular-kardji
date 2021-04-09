import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootComponentComponent } from './foot-component.component';

describe('FootComponentComponent', () => {
  let component: FootComponentComponent;
  let fixture: ComponentFixture<FootComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
