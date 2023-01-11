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

  selectedMed?: Med;

  medication: Med [] = [];


  constructor(private medService: MedService, private messageService: MessageService){}

  ngOnInit(): void {
    this.getMeds();
  }

  onSelect(med: Med): void {
    this.selectedMed = med;
    this.messageService.add('MedicationComponent: Selected med id=${med.id}');
  }


getMeds(): void {
  this.medService.getMeds()
      .subscribe(med => this.medication = med);
}

}
