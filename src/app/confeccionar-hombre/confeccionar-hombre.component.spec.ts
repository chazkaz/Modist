import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfeccionarHombreComponent } from './confeccionar-hombre.component';

describe('ConfeccionarHombreComponent', () => {
  let component: ConfeccionarHombreComponent;
  let fixture: ComponentFixture<ConfeccionarHombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfeccionarHombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfeccionarHombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
