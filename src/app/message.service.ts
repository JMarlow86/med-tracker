import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] =[];
  clickTime: any;


  add(message: string) {
    this.messages.push(message);
  }
  clear () {
    this.messages = [];
  }
 date(date: any) {
    // Get the current date and time using the Date() constructor
    const now = new Date();
    // Set the clickTime property to the current time using the toLocaleString() method
    this.clickTime = now.toLocaleString();
    this.messages.push(this.clickTime);
    console.log('date called');

  }

}
