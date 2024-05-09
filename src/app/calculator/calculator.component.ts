import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  input = '';
  private prevValue = '';
  private curValue = '';

  onPress(key: string) {
    if (key === 'C') {
      this.input = '';
    } else if (key === '=') {
      this.curValue = eval(this.input);
      this.input = this.curValue;
    } else {
      this.input += key;
    }
  }
}
