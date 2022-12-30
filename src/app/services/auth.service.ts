import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      let userEmail = user?.email as string;
      if (user != null) this.userEmail.next(userEmail)
    });
  }



  login(email: any, password: any): any {
    return this.afAuth.signInWithEmailAndPassword(email.value, password.value)
      .then(result => {
        this.userEmail.next(email.value);
        this.router.navigate(['/admin']);
      })
      .catch((error) => {
        console.log(error.message)
      });

  }

  logout() {
    return this.afAuth.signOut()
      .then(() => {
        console.log('kirjattu ulos')
        sessionStorage.clear();
        this.userEmail.next('')
        this.router.navigate(['/admin/login'])
      })
      .catch((error) => {
        console.log(error.message)
      })

  }

  getLoggedInUser(): any {
    return this.afAuth.authState;
  }

  checkLoggedInUser() {
    return this.userEmail;
  }
}