import { Component, ViewContainerRef } from '@angular/core';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(private viewContainerRef: ViewContainerRef){}
 }
