import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  afAuth: any;
  userEmail: any;
  router: any;

  login(email: string, passwrd: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, passwrd)
      .then((result: any) => {
        this.userEmail.next(email);
        this.router.navigate(['admin/helloworld'])
      }).
      catch((error: any) => console.log(error))
      ;

  }

  logout() {
    return this.afAuth.auth.signOut()
    this.userEmail.next("");
    this.router.navigate(['calculator']);
  }

  getLoggedInUser(): any {
    return this.afAuth.authState;

  }

  checkLoggedInUser() {
    return this.userEmail;

  }
  constructor() { }
}
