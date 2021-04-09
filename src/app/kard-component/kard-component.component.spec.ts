import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KardComponentComponent } from './kard-component.component';

describe('KardComponentComponent', () => {
  let component: KardComponentComponent;
  let fixture: ComponentFixture<KardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KardComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
