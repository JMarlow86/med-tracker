import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Med } from './med/med';
import { MEDS } from './mock-meds/mock-meds';
import { MessageService } from './message.service';




@Injectable({
  providedIn: 'root'
})
export class MedService {

  constructor(private messageService: MessageService) { }


  //MEDS is hardcoded array of Med
  getMeds(): Observable<Med[]> {
    this.getTime();
    const med = of(MEDS);
    this.messageService.add('Medication Selections');
    return med;


  }
  getTime(){
    let currentDate = new Date();
    let time = currentDate.getTime();
    this.messageService.add('Date');
    console.log(currentDate);

    return currentDate;
  }

}
