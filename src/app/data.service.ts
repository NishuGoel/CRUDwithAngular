import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { UserData } from './user-data.service';
import { User } from './user-data';
import { UserFetch } from './user-fetch';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiurl = 'api/users';                 // Our created Data can be accessed here at api/users
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { }                     //Injecting HTTP service to communicate with the data

  private handleError(error: any) {
    console.error(error);                                       //Created a function to handle and log errors, in case
    return throwError(error);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  getUser(id: number): Observable<UserFetch> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<UserFetch>(url).pipe(
    catchError(this.handleError)
    );
    }

    addUser (user: UserFetch): Observable<UserFetch> {
      user.id=null;
      return this.http.post<UserFetch>(this.apiurl, user, this.httpOptions).pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)
      );
  }

  deleteUser(id: number): Observable<UserFetch> {
    const url = `${this.apiurl}/${id}`;
    return this.http.delete<UserFetch>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateUser(user: UserFetch): Observable<UserFetch>{
    const url = `${this.apiurl}/${user.id}`;
    return this.http.put<UserFetch>(this.apiurl, user, this.httpOptions).pipe(
      map(() => user),
      catchError(this.handleError)
    );
  }
}
