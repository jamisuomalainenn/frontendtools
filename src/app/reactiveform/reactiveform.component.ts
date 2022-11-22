import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  profileForm: FormGroup;

  onSubmit(profileForm: any) {

    console.log('profileForm.value: ' + this.profileForm.value);
    console.log('profileForm.value: ' + this.profileForm.value.firstName);
    this.profileForm.reset();
  }

  constructor() {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]*$')]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]*$')]),
      personid: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([5-9]\\d\+|\\d\\d-|[01]\\dA)\\d{3}[\\dA-Z]$")]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern("^[a-zA-Z0-9 ]*$")]),
      password: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{10,}$")]),
      password2: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern("{{password.value}}")]),
      checkbox: new FormControl('', [Validators.requiredTrue])
    })
  }

  get firstName() {
    return this.profileForm.get('firstName');
  }
  get lastName() {
    return this.profileForm.get('lastName')
  }

  get personid() {
    return this.profileForm.get('personid')
  }

  get email() {
    return this.profileForm.get('email')
  }

  get username() {
    return this.profileForm.get('username')
  }
  get password() {
    return this.profileForm.get('password')
  }

  get password2() {
    return this.profileForm.get('password2')
  }

  get checkbox() {
    return this.profileForm.get('checkbox')
  }
  ngOnInit(): void {
  }

}
