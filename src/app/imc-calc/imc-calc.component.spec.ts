import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcCalcComponent } from './imc-calc.component';

describe('ImcCalcComponent', () => {
  let component: ImcCalcComponent;
  let fixture: ComponentFixture<ImcCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImcCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImcCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
