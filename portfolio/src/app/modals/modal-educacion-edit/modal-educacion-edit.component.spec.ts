import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEducacionEditComponent } from './modal-educacion-edit.component';

describe('ModalEducacionEditComponent', () => {
  let component: ModalEducacionEditComponent;
  let fixture: ComponentFixture<ModalEducacionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEducacionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEducacionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
