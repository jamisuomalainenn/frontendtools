import { Component } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login(): void {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@222");
  }
  constructor(public router: Router) {
    this.router.navigate(['admin/helloworld']);
    //this.router.navigate(['feedback']);
    //this.router.navigate(['form']);
    //this.router.navigate(['reactiveform']);
    //this.router.navigate(['cinema']);


  }
  goToHome() {
    this.router.navigate(['helloworld']);
  }
}




