import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidasHombreComponent } from './medidas-hombre.component';

describe('MedidasHombreComponent', () => {
  let component: MedidasHombreComponent;
  let fixture: ComponentFixture<MedidasHombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedidasHombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedidasHombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
