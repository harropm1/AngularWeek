import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { user } from './../models/user.model';

@Injectable()
export class AuthService {
  private usersEndpoint: string = 'http://localhost:3000/login/';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient){};

  // Hard-coded for demo purposes
  USER_NAME: string = 'Admin';
  PASSWORD: string = 'password';
  
  users: user[] = [];

  addUser(firstName: string, lastName: string, email: string): Array<any> {
    this.users.push(new user(firstName, lastName, email));
    return this.users;
  }

  login(userName: string, password: string) : Observable<any> {
    return this.http.post(this.usersEndpoint, {user_name : userName, user_password : password}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
}
