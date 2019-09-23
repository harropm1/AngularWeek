import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Add a User';

  //propName: type = defaultValue
  firstName: string = 'Michelle';
  lastName: string = 'Sloneker';
  email: string = 'michellesloneker@mail.com';

  addUserBtn: boolean = true;

  newUser: string = '';

 onAddUser(): void {
    this.newUser =  `${this.firstName} ${this.lastName}, email: ${this.email}`;
    this.addUserBtn = true;
 }

 onReset(): void {
  this.firstName = '';
  this.lastName = '';
  this.email = '';
  this.addUserBtn = false;
 }
}
