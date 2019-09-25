import { Injectable } from '@angular/core';

import { user } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: user[] = [
    new user('Michelle', 'Harrop', 'michelleharrop@mail.com'),
    new user('Megan', 'Harrop', 'megan@mail.com'),
    new user('Megan', 'Harrop', 'megan@mail.com'),
  ];
  
  constructor() { }

  getUsers(): Array<any> {
    return this.users;
  }
}