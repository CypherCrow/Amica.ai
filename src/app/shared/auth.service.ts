import { Injectable } from '@angular/core';
import { Player } from './player'; 
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = "http://localhost:4000/api"; 
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private http: HttpClient, public router: Router) { }

  signUp(player: Player): Observable<any> {
    let api = `${this.endpoint}/register-player`;
    return this.http.post(api, player).pipe(catchError(this.handleError));
  }

  signIn(player: Player) {
    return this.http.post<any>(`${this.endpoint}/login`, player)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res; 
          this.router.navigate(['user-profile/' + res.msg._id]);
        });
      });
  }

  getToken() {
    return localStorage.getItem('access_token'); 
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token'); 
    return authToken !== null ? true : false; 
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null){
      this.router.navigate(['log-in']); 
    }
  }

  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/player-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {}; 
      }), 
      catchError(this.handleError)
    ); 
  }

  handleError(error: HttpErrorResponse) {
    let msg = ''; 
    if(error.error instanceof ErrorEvent){
      msg = error.error.message; 
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg); 
  }
}
