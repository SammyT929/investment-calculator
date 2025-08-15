import { Component, input, inject, computed } from '@angular/core';
import { InvestmentService } from '../app/investment.service';
@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

 results = this.investmentService.resultData.asReadonly();
}
