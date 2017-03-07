import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string;
  repo: string;
  people: string;
  team: string;
  statesTabs = [
    { id: 0, state: 'active'},
    { id: 1, state: 'disable'},
    { id: 2, state: 'disable'},
    { id: 3, state: 'disable'},
    { id: 4, state: 'disable'}
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( param => this.username = param['name']);
    console.log('the mane is:', this.username);
  }

  onclickTab(index) {
    this.statesTabs[index].state = 'active';
    this.statesTabs.forEach(element => {
      if (element.id !== (index)) {
        this.statesTabs[element.id].state = 'disable';
      }
    });
  }
}
