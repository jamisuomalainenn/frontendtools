import { Component } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(public router: Router) {
    this.router.navigate(['admin/helloworld']);
    //this.router.navigate(['feedback']);
    //this.router.navigate(['form']);
    //this.router.navigate(['reactiveform']);
    //this.router.navigate(['cinema']);
  }
}