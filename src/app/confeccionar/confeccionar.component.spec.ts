import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfeccionarComponent } from './confeccionar.component';

describe('ConfeccionarComponent', () => {
  let component: ConfeccionarComponent;
  let fixture: ComponentFixture<ConfeccionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfeccionarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfeccionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
