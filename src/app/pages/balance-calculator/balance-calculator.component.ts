import { Component, inject } from '@angular/core';
import { ChemicalBalanceService } from '../../services/chemical-balance.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-balance-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './balance-calculator.component.html',
  styleUrl: './balance-calculator.component.scss'
})
export class BalanceCalculatorComponent {
  equation: string = '';
  result: string = '';

  #balanceService = inject(ChemicalBalanceService);
  

  calculateBalance() {
    this.result = this.#balanceService.balanceEquation(this.equation);
  }
}
