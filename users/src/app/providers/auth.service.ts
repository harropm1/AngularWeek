import { Injectable } from '@angular/core';
import { user } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  // Hard-coded for demo purposes
  USER_NAME: string = 'Admin';
  PASSWORD: string = 'password';
  
  users: user[] = [];

  addUser(firstName: string, lastName: string, email: string): Array<any> {
    this.users.push(new user(firstName, lastName, email));
    return this.users;
  }

  login(userName: string, password: string) {
    if (userName === this.USER_NAME && password === this.PASSWORD) {
      console.log('AuthService: Login successful!');
      return  true;
    } else {
      console.log('AuthService: Login failed!');
      return false;
    }
  }
}
