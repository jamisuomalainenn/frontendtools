import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  login(email: string, password: string) {
  }
  logout() { }
  getLoggedInUser() { }
  checkLoggedInUser() { }

  constructor() { }
}
