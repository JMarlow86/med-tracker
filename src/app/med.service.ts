import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Med } from './med/med';
import { MEDS } from './mock-meds/mock-meds';
import { MessageService } from './message.service';




@Injectable({
  providedIn: 'root'
})
export class MedService {

  constructor(private messageService: MessageService) { }


  //MEDS is hardcoded array of Med returns all meds
  getMeds(): Observable<Med[]> {
    const med = of(MEDS);
    console.log('returns selected me');
    return med;
  }


}
