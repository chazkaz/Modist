import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidasMujerComponent } from './medidas-mujer.component';

describe('MedidasMujerComponent', () => {
  let component: MedidasMujerComponent;
  let fixture: ComponentFixture<MedidasMujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedidasMujerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedidasMujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
