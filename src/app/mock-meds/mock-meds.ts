import { timestamp } from 'rxjs';
import { DatePipe } from '@angular/common';
import { Med } from './../med/med';


export const MEDS: Med [] = [
  {id: 'RX10', name: 'Omeprazole', directions: 'Take 1 pill once a day before meal', mg: '40mg', timestamp:'timestamp'},
  {id: 'RX11', name: 'Gabapentin', directions: 'Take 1 pill once a day before meal', mg: '100mg' , timestamp:'timestamp'},
  {id: 'RX12', name: 'Galliprant', directions: 'Take 1 pill once a day before meal', mg: '300mg' , timestamp:'timestamp'},
  {id: 'RX13', name: 'Plaquenil', directions: 'Take 1 pill once a day before meal', mg: '150mg' , timestamp:'timestamp'},
  {id: 'RX14', name: 'Vivance', directions: 'Take 1 pill once a day before meal', mg: '50mg' , timestamp:'timestamp'},
  {id: 'RX15', name: 'Tylenol', directions: 'Take 1 pill once a day before meal', mg: '300mg' , timestamp:'timestamp'},
  {id: 'RX16', name: 'Loratadine', directions: 'Take 1 pill once a day before meal', mg: '10mg', timestamp:'timestamp'},
  {id: 'RX17', name: 'Albuterol', directions: 'Take 1 pill once a day before meal', mg: '' , timestamp:'timestamp'},
  {id: 'RX18', name: 'Vitamin D', directions: 'Take 1 pill once a day before meal', mg: '1000UI', timestamp:'timestamp' },
  {id: 'RX19', name: 'Prednisone', directions: 'Take 1 pill once a day before meal', mg: '20mg' , timestamp:'timestamp'}
];
