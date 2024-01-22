import { Component } from '@angular/core';

@Component({
  selector: 'app-balance-calculator',
  standalone: true,
  imports: [],
  templateUrl: './balance-calculator.component.html',
  styleUrl: './balance-calculator.component.scss'
})
export class BalanceCalculatorComponent {
  equation: string = '';
  result: string = '';

  constructor(private balanceService: ChemicalBalanceService) { }

  calculateBalance() {
    this.result = this.balanceService.balanceEquation(this.equation);
  }
}
