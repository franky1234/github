import { Component, EventEmitter, Output, Input } from '@angular/core';
@Component({
  selector: 'app-alert',
  template: `
    <div *ngIf="!hidden">
  	  <div class="back" (click)="hide()"></div>
	    <div class="pos">
	      <ng-content></ng-content>
	      <div>
  	      <button (click)="hide()">{{ ok }}</button>
	      </div>
      </div>
	  </div>
    `,
  styles: [`
    .pos {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      border: 1px solid #ddd;
      padding: 1rem;
    }

    .back {
      position: absolute;
      background: rgba(0, 0, 0, 0.1);
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }
  `]
})
export class AlertComponent{
  hidden = true;
  @Input() ok = 'OK';
  @Output() close = new EventEmitter<boolean>();
  show(){
    console.log('Alert Component inside Show');
    this.hidden = false;
  }
  hide(){
    console.log('Alert Component inside hide:',this.close);
    this.hidden = true;
    this.close.emit(true);
  }
}