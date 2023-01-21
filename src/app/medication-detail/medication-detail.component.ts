import { Component, Input } from '@angular/core';
import { Med } from './../med/med';

@Component({
  selector: 'app-medication-detail',
  templateUrl: './medication-detail.component.html',
  styleUrls: ['./medication-detail.component.css']
})


export class MedicationDetailComponent {
  @Input() med?: Med; // defines input as part of Med array


}
