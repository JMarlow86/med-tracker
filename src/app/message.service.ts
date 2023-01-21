import { MessagesComponent } from './messages/messages.component';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] =[];
 Date!: DateConstructor;

  add(message: string) {
    this.messages.push(message);
  }
  clear () {
    this.messages = [];
  }
  date(message: number){
    const now = new Date();
    this.Date();
    now;
  }

}
