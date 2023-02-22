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
    const now = new Date();
    this.clickTime = now.toLocaleString();
    this.messages.push(this.clickTime);
    console.log('date called');

  }

}
