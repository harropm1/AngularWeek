import { Injectable } from '@angular/core';
import { user } from './../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  // Hard-coded for demo purposes
  users: user[] = [];

  addUser(firstName: string, lastName: string, email: string): Array<any> {
    this.users.push(new user(firstName, lastName, email));
    return this.users;
  }
}
