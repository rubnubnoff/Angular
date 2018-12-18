import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface LoginUserCredentials {
  email: string;
  password: string;
}
interface RegisterUserCredentials extends LoginUserCredentials {
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  register(body: RegisterUserCredentials) {
    return this.http.post('https://ancient-castle-38131.herokuapp.com/users/signup', body)
      .toPromise();
  }

  login(body: LoginUserCredentials) {
    return this.http.post('https://ancient-castle-38131.herokuapp.com/users/login', body, { observe: 'response' })
      .toPromise()
      .then(res => {
        localStorage.setItem('x-auth-token', res.headers.get('x-auth-token'));
      });
  }

  logout() {
    return new Promise((resolve, reject) => {
      try {
        localStorage.removeItem('x-auth-token');
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }

  isAuthorized() {
    return Promise.resolve(localStorage.getItem('x-auth-token')).then((token: string) => typeof token === 'string');
  }
}
