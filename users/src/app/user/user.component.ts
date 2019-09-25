import { Component, OnInit } from '@angular/core';
import { user } from './../models/user.model';
import { UserService } from './../providers/user.service';
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
  
  private sub: any;
  private userName: string = '';

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) {}

    ngOnInit() {
      // get username from Query Params
      // Subscribe to Observable
      // pass anonymoue callback function to subscribe method
      this.sub = this.route
                .queryParams
                .subscribe(params => {
                  this.userName = params['username'];
                });
                
      // call getusers() method in userService
      this.userService.getUsers().subscribe((data)  => {
        this.users = data.users;
      });
    }

  onLogout() {
    this.router.navigate(['/']);
  }
}