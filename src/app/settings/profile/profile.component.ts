import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  custom: Profile = {
    organization : '',
    email: '',
    description: '',
    url: '',
    location: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
