import { Component, OnInit } from '@angular/core';
import { user } from './../models/user.model';
import { AuthService } from './../providers/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title: string = 'Add a User';

  // Array to hold user Objects
  users: user[] = [];
  
  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {}

  //propName: type = defaultValue
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  newUserAdded: boolean = false;

  onAddUser(): void {
    this.users = this.authService.addUser(this.firstName, this.lastName, this.email);
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

  onLogout() {
    this.router.navigate(['/']);
  }

}