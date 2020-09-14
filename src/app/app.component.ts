import { Component } from '@angular/core';
import { DataService, ICar } from './data.service';
import { MatDialog } from '@angular/material/dialog';
import { CarComponent } from './components/car/car.component';
import { CreditComponent } from './components/credit/credit.component';
import { SuccessComponent } from './components/success/success.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
