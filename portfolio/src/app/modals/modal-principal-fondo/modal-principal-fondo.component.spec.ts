import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPrincipalFondoComponent } from './modal-principal-fondo.component';

describe('ModalPrincipalFondoComponent', () => {
  let component: ModalPrincipalFondoComponent;
  let fixture: ComponentFixture<ModalPrincipalFondoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPrincipalFondoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPrincipalFondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
