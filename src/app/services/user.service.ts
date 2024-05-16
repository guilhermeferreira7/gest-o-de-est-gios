import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  URL = 'http://localhost:3000/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  create(user: User): Observable<User> {
    console.log('aaa');

    return this.http.post<User>(this.URL, user, this.httpOptions);
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.URL}/${id}`);
  }
}
