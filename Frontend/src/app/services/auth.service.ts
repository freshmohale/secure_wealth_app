import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const AUTH_API = '';
//use this to test AI Latest Backend
// const AUTH_API = 'https://localhost:3000/';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated: boolean = false;
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'auth/login', {
      email,
      password
    }, httpOptions);
  }

  register(firstName: string, lastName: string, email: string, password: string, confirmPassword: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    return this.http.post(AUTH_API + 'auth/register', {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    }, httpOptions);
  }

  getUsers(): Observable<any> {
    return this.http.get(AUTH_API + 'auth', { responseType: 'json' });
  }

  storeAccessToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }


  isAuthenticatedUser(): boolean {
    // Check if the user is authenticated (e.g., by checking access token in local storage or any other authentication mechanism)
    // Return true if authenticated, false otherwise
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken; // Assuming that the presence of access token indicates authenticated user
  }

  logout(): void {
    // Perform logout logic, e.g., clear access token from local storage
    localStorage.removeItem('accessToken');
    window.location.replace("/landing") // Redirect to login page after logout
  }
}
