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


  getMeds(): Observable<Med[]> {
    const med = of(MEDS);
    this.messageService.add('MedService: fetched meds');
    return med;
  }

}
