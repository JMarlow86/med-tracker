import { Med } from './../med/med';
import { Component } from '@angular/core';
import { MEDS } from './../mock-meds/mock-meds';


@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']

})


export class MedicationComponent {

  medication: Med = {
    id: 1,
    name: 'Galliprant'
  };

  meds = MEDS;
  selectedMed?: Med;

  onSelect(meds: Med): void {
    this.selectedMed = meds;
  }


}

