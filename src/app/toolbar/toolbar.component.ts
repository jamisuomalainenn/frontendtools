import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  loginText: any;
  logoutText: any;
  userEmail: any;

  constructor(public router: Router, public authService: AuthService) {
    this.userEmail = authService.checkLoggedInUser();
  }
  logout() {
    this.authService.logout();
  }
}