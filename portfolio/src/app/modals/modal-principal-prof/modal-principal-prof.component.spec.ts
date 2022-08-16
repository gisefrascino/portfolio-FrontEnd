import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPrincipalProfComponent } from './modal-principal-prof.component';

describe('ModalPrincipalProfComponent', () => {
  let component: ModalPrincipalProfComponent;
  let fixture: ComponentFixture<ModalPrincipalProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPrincipalProfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPrincipalProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
