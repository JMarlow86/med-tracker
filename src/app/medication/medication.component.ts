
import { Component, OnInit } from '@angular/core';
import { Med } from './../med/med';
import { MedService } from './../med.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']

})

export class MedicationComponent implements OnInit {

  selectedMed?: Med; //if selectedMed is true then Med object
  medication: Med [] = [];
  med: any;


  constructor(private medService: MedService, private messageService: MessageService){}

  ngOnInit(): void {
    this.getMeds();
  }


  //logs time that medication is selected in console
  showTime() {
    let currentDate = new Date();
    let timeStamp = currentDate.getTime();
    console.log('SHOW TIME CALLED' + ' ' + currentDate);

  }
 //function called when pill button selected
  onSelect(med: Med) {
    this.showTime();
    this.selectedMed = med;
    this.messageService.add(`You took ${med.name} at ${med.timestamp}`);
    console.log('ONSELECT FUNCTION CALLED');

  }



  //this function is called when page loads and gets hard coded med values
getMeds(): void {
  this.medService.getMeds()
      .subscribe(med => this.medication = med);
      console.log('GET MEDS CALLED');

}


}
