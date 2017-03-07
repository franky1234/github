import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-peoples-list',
  templateUrl: './peoples-list.component.html',
  styleUrls: ['./peoples-list.component.css']
})
export class PeoplesListComponent implements OnInit {

  @Input() peoples: any;
  PATH = '../../../assets/img/';
  FOUR: any;
  constructor() { }

  ngOnInit() {
    if (this.peoples !== undefined) {
       this.FOUR = this.peoples.slice(0, 4);
    }
  }

}