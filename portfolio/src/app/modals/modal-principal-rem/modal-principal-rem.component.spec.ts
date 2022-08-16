import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPrincipalRemComponent } from './modal-principal-rem.component';

describe('ModalPrincipalRemComponent', () => {
  let component: ModalPrincipalRemComponent;
  let fixture: ComponentFixture<ModalPrincipalRemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPrincipalRemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPrincipalRemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
