import { Component } from '@angular/core';
import { TenttiService } from '../services/tentti.service';
import { TenttiItem } from './tentti';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tentti',
  templateUrl: './tentti.component.html',
  styleUrls: ['./tentti.component.css']
})
export class TenttiComponent {


  minLoan = 500;
  maxLoan = 10000;
  loanAmnt = 500;
  loanTme = 1;
  monthlyPay = 0;
  loanForm: FormGroup;


  onSubmit() {
    console.log('loanForm.firstNameValue: ' + this.loanForm.value.firstName);
    console.log('loanForm.value: ' + this.loanForm.value);
    console.log('loanForm.lastNameValue: ' + this.loanForm.value.lastName);
    console.log('loanForm.personIdValue: ' + this.loanForm.value.persoid);
    console.log('loanForm.emailValue: ' + this.loanForm.value.email);
    console.log('loanForm.valid: ' + this.loanForm.valid);
    this.loanForm.reset();
  }


  LoanAmount(slider: any): void {
    this.loanAmnt = slider.value;
    this.monthlyPay = this.CalculateMonthlyPayment();
  }
  LoanTime(slider: any): void {
    this.loanTme = slider.value;
    this.monthlyPay = this.CalculateMonthlyPayment();
  }

  CalculateMonthlyPayment(time = this.loanTme, amount = this.loanAmnt) {
    return (Math.pow((1 + 9.5 / 1200), time * 12) * 9.5 / 1200) / ((Math.pow((1 + 9.5 / 1200), time * 12)) - 1) * amount;
  }


  tenttiItemArray: Array<TenttiItem> = [];


  constructor(xservice: TenttiService) {
    this.tenttiItemArray = xservice.getData();

    this.loanForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]*$')]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]*$')]),
      personid: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([5-9]\\d\+|\\d\\d-|[01]\\dA)\\d{3}[\\dA-Z]$")]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      phone: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]),
      checkbox: new FormControl('', [Validators.requiredTrue])
    })
  }

  get firstName() {
    return this.loanForm.get('firstName');
  }
  get lastName() {
    return this.loanForm.get('lastName')
  }

  get personid() {
    return this.loanForm.get('personid')
  }

  get email() {
    return this.loanForm.get('email')
  }

  get phone() {
    return this.loanForm.get('phone')
  }

  get checkbox() {
    return this.loanForm.get('checkbox')
  }

  ngOnInit(): void {

  }

  onInputChange(event: any, xItem: TenttiItem) {
    xItem.setAnswer(event.value);
  }
}
