import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExperienciaRemComponent } from './modal-experiencia-rem.component';

describe('ModalExperienciaRemComponent', () => {
  let component: ModalExperienciaRemComponent;
  let fixture: ComponentFixture<ModalExperienciaRemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExperienciaRemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExperienciaRemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
