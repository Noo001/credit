import { Component } from '@angular/core';
import { DataService, ICar } from './services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { CarListComponent } from './components/car-list/car-list.component';
import { CreditComponent } from './components/credit/credit.component';
import { SuccessComponent } from './components/success/success.component';

@Component({
  selector: 'app-root',
  template: '<app-car-list></app-car-list>'
})
export class AppComponent {
  
}
