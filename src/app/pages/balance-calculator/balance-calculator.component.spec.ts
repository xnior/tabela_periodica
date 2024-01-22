import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceCalculatorComponent } from './balance-calculator.component';

describe('BalanceCalculatorComponent', () => {
  let component: BalanceCalculatorComponent;
  let fixture: ComponentFixture<BalanceCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalanceCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BalanceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
