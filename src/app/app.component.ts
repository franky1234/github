import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import {AlertComponent} from './alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app works!';
  /*
  @ViewChild(AlertComponent) alert: AlertComponent;
  @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>;
  alertsArray = [];

  ngAfterViewInit(){
    console.log('AppComponent after init');
    this.alertsArray = this.alerts.toArray();
  }

  showAlert(step){
    console.log('AppComponent Step:',step);
    //this.alert.show();
    this.alertsArray[step - 1].show();
  }
  */

}
