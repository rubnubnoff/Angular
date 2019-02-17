import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { share, tap } from 'rxjs/operators';
interface LoginUserCredentials {
  email: string;
  password: string;
}
interface RegisterUserCredentials extends LoginUserCredentials {
  name: string;
}
interface Responce {
  message: string;
}
const getToken = () => {
  return localStorage.getItem('x-auth-token');
};
const setToken = (token) => {
  localStorage.setItem('x-auth-token', token);
};
const removeToken = () => {
  localStorage.removeItem('x-auth-token');
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private authStatusSubject = new BehaviorSubject(!!getToken());
  authStatus$ = this.authStatusSubject.asObservable();

  register(body: RegisterUserCredentials): Observable<Responce> {
    return this.http.post<Responce>('https://ancient-castle-38131.herokuapp.com/users/signup', body)
      .pipe(share());
  }

  login(body: LoginUserCredentials): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>('https://ancient-castle-38131.herokuapp.com/users/login', body, { observe: 'response' })
      .pipe(share())
      .pipe(
        tap(res => setToken(res.headers.get('x-auth-token'))),
        tap(() => this.authStatusSubject.next(true))
      );
  }

  logout(): Observable<Responce> {
    return this.http.get<Responce>('https://ancient-castle-38131.herokuapp.com/users/logout')
      .pipe(share())
      .pipe(
        tap(() => removeToken()),
        tap(() => this.authStatusSubject.next(false))
      );
  }
}
