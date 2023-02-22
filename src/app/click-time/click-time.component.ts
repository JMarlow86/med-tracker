import { Component } from '@angular/core';

@Component({
  selector: 'app-click-time',
  templateUrl: './click-time.component.html',

})
export class ClickTimeComponent {
  clickTime = '';

  onClick() {
    // Get the current date and time using the Date() constructor
    const now = new Date();
    // Set the clickTime property to the current time using the toLocaleString() method
    this.clickTime = now.toLocaleString();
  }
}

