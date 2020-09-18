import { Component } from '@angular/core';
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

  cars: ICar[];

  constructor(
    private dataService: DataService,
    public dialog: MatDialog
  ){ 
    this.cars = this.dataService.getData;
  }

  openDialog(car: ICar) {
    const dialogRef = this.dialog.open(CreditComponent, { data: {price: car.price}});

    dialogRef.afterClosed().subscribe(result => {
      if(result === true || result === !true) {
        this.dialog.open(SuccessComponent);
      }
    });
  }

}
