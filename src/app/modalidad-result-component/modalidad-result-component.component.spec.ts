import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadResultComponentComponent } from './modalidad-result-component.component';

describe('ModalidadResultComponentComponent', () => {
  let component: ModalidadResultComponentComponent;
  let fixture: ComponentFixture<ModalidadResultComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadResultComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadResultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
