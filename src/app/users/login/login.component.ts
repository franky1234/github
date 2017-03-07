import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { UserService } from './users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  user = new User('', '');
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  authenticate(user) {
    this.userService.foundUserAndPassword(user)
    .then( user => {
      if (user !== {}) {
        this.router.navigate(['/home', user.username]);
      }
    }).catch(error => console.log('error:', error.message));
  }

}
