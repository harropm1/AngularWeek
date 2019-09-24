import { Component, OnInit } from '@angular/core';
import { user } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // Array to hold user Objects
  users: user[] = [
    new user("Michelle", "Harrop", "michellesloneker@mail.com"),
    new user("Megan", "Harrop", "megan@mail.com"),
    new user("Bob", "Harrop", "bob@mail.com"),
  ];
  constructor() { }

  ngOnInit() {
  }

  title: string = 'Add a User';

  //propName: type = defaultValue
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  newUserAdded: boolean = false;

  onAddUser(): void {
    //this.users.push(`${this.firstName} ${this.lastName}, email: ${this.email}`);
    this.users.push({"firstName": this.firstName, "lastName": this.lastName, "email": this.email});
    this.newUserAdded = true;
  }

  onReset(): void {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.newUserAdded = true;
  }
  getColor(): string {
    return this.newUserAdded === true ? '#000080' : '#FF0000'; // navy : red
  }

}