import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfeccionarMujerComponent } from './confeccionar-mujer.component';

describe('ConfeccionarMujerComponent', () => {
  let component: ConfeccionarMujerComponent;
  let fixture: ComponentFixture<ConfeccionarMujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfeccionarMujerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfeccionarMujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
