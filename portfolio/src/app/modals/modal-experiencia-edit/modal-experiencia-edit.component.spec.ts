import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExperienciaEditComponent } from './modal-experiencia-edit.component';

describe('ModalExperienciaEditComponent', () => {
  let component: ModalExperienciaEditComponent;
  let fixture: ComponentFixture<ModalExperienciaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExperienciaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExperienciaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
