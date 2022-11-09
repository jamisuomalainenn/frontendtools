import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: string = "";
  buttons: string[] =
    ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];

  addValue(value: string): void {
    console.log('addValue value: ' + value);
    if (value == '=') {
      this.result = eval(this.result);
    }
    else if (value == 'C') {
      this.result = "";
    }
    else {
      this.result = this.result + value;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
