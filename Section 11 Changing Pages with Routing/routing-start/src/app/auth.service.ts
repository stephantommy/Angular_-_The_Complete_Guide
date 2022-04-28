import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise: Promise<boolean> = new Promise<boolean>(
      (resolve, reject) => {
        let successAuthenticating: boolean = true;
        setTimeout(() => {
          if (successAuthenticating) {
            resolve(this.loggedIn);
          } else {
            reject(false);
          }
        }, 1000);
      }
    );

    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
