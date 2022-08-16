import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEducacionRemComponent } from './modal-educacion-rem.component';

describe('ModalEducacionRemComponent', () => {
  let component: ModalEducacionRemComponent;
  let fixture: ComponentFixture<ModalEducacionRemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEducacionRemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEducacionRemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
