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

  newUserAdded: boolean = false;

  users: Array<object> = [];

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