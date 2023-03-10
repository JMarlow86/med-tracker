
import { Component, OnInit } from '@angular/core';
import { Med } from './../med/med';
import { MedService } from './../med.service';
import { MessageService } from '../message.service';
import { NavHeaderComponent } from '../nav-header/nav-header.component';
// import { ClickTimeComponent } from '../click-time/click-time.component';


@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']

})

export class MedicationComponent implements OnInit {

  selectedMed?: Med; //if selectedMed is true then Med object
  medication: Med [] = [];
  med: any;
  timeClicked: any;
  clickTime: any;

  constructor(private medService: MedService, private messageService: MessageService){}

  ngOnInit(): void {
    this.getMeds();
  }

 //function called when pill button selected
  onSelect(med: Med) {
    this.selectedMed = med;
    this.messageService.add(`You took ${med.name} at` );
    this.messageService.date('');
    if(med.name === 'Prednisone' || med.name === 'Tylenol') {
      this.messageService.add(`Reminder! ${med.name} should be taken with food`);
      this.messageService.add('');
    } else {
      this.messageService.add('')
    }
    console.log('ONSELECT FUNCTION CALLED');
  }

  //this function is called when page loads and gets hard coded med values
getMeds(): void {
  this.medService.getMeds()
      .subscribe(med => this.medication = med);
      console.log('GET MEDS CALLED');


}






}
