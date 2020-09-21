import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService, ICar } from 'src/app/services/data.service';
import { CreditComponent } from '../credit/credit.component';
import { SuccessComponent } from '../success/success.component';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
  @ViewChild(SuccessComponent, {static: false}) private successComponent: SuccessComponent;

  cars: ICar[];

  constructor(
    private dataService: DataService,
    public dialog: MatDialog,
    
  ){ 
    this.cars = this.dataService.getData;
  }

  openDialog(car: ICar) {
    const dialogRef = this.dialog.open(CreditComponent, { data: {car: car}});

    dialogRef.afterClosed().subscribe(result => {
      if(result === !true ) {

        this.dialog.open(SuccessComponent, { data: {plan: 'Ваш кредитный план: ' + this.dataService.getCrPlan}});
      }
      if(result === true) {
        this.dialog.open(SuccessComponent, { data: {plan: 'Телефон службы поддежки: 02'}});
      }
    });
  }

 
}
