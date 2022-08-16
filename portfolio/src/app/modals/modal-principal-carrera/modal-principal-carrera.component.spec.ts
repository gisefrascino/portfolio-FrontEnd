import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPrincipalCarreraComponent } from './modal-principal-carrera.component';

describe('ModalPrincipalCarreraComponent', () => {
  let component: ModalPrincipalCarreraComponent;
  let fixture: ComponentFixture<ModalPrincipalCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPrincipalCarreraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPrincipalCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
