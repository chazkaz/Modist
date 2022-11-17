import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosNewComponent } from './productos-new.component';

describe('ProductosNewComponent', () => {
  let component: ProductosNewComponent;
  let fixture: ComponentFixture<ProductosNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
