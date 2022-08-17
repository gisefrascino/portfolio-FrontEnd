import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPrincipalPerfilComponent } from './modal-principal-perfil.component';

describe('ModalPrincipalPerfilComponent', () => {
  let component: ModalPrincipalPerfilComponent;
  let fixture: ComponentFixture<ModalPrincipalPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPrincipalPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPrincipalPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
