import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService, ICar } from 'src/app/services/data.service';

interface Slider{
  min: number;
  max: number;
  value: number;
  step: number;
}

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditComponent {
  car: ICar;
  firstPay: Slider;
  perMonthPay: Slider;
  months: Slider;

  monthPlural: string = 'месяцев';
  bgImg = '';

  constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        private dataService: DataService,
  ) { 
    this.car = data.car;
    this.bgImg = 'url(' + data.car.image + ')';
    this.init();
  }

  init(): void{
    this.firstPay = {min: 10, max: 95, value: 10, step: 5};
    this.calcMonths();
    this.calcPerMonthPay();
  }

  calcMonths(): void{
    let maxMonths = this.car.price * ((100-this.firstPay.value)/100) / (12 * 1000);
    if (maxMonths/12 != Math.floor(maxMonths/12)) maxMonths = (Math.floor(maxMonths/12) + 1)*12;
    this.months = {min: 12, max: maxMonths, value: this.months ? this.months.value : maxMonths, step: 12};
    this.validateMonthsValue();
  }

  validateMonthsValue(){
    if (!this.months.value) this.months.value = 12; 
    else if (this.months.value < 12) this.months.value = 12;
    else if (this.months.value > this.months.max) this.months.value = this.months.max;
    if (this.months.value/12 != Math.floor(this.months.value/12)) this.months.value = (Math.floor(this.months.value/12) + 1)*12;

    this.dataService.setCrPlan = this.months.value < 25 ? 'Оптимальный':this.months.value > 119 ? 'Кабала' : 'Норма';
    this.monthPlural = 
      ((this.months.value%10 == 2 || this.months.value%10 == 3 || this.months.value%10 == 4) && (this.months.value%100 !=12 || this.months.value%100 !=13 ||  this.months.value%100 !=14) ) 
      ? 'месяца' : (this.months.value%10 == 1 && this.months.value%100 != 11) ? 'месяц' : 'месяцев';
  }

  calcPerMonthPay(): void{
    let perMonthPayMin = this.car.price * ((100-this.firstPay.value)/100) / (this.months.max);
    if (perMonthPayMin/1000 != Math.floor(perMonthPayMin/1000)) perMonthPayMin = (Math.floor(perMonthPayMin/1000) + 1) *1000;
    let perMonthPayMax = (this.car.price * (100-this.firstPay.value)/100)/ (this.months.min);
    if (perMonthPayMax/1000 != Math.floor(perMonthPayMax/1000)) perMonthPayMax = (Math.floor(perMonthPayMax/1000) + 1) *1000;
    this.perMonthPay = {min: perMonthPayMin, max: perMonthPayMax, value: this.perMonthPay? this.perMonthPay.value : perMonthPayMin, step: 1000};
    this.validatePerMonthPayValue();
  }

  validatePerMonthPayValue(){
    if (!this.perMonthPay.value) this.perMonthPay.value = this.perMonthPay.min; 
    else if(this.perMonthPay.value > this.perMonthPay.max) this.perMonthPay.value = this.perMonthPay.max;
    else if(this.perMonthPay.value < this.perMonthPay.min) this.perMonthPay.value = this.perMonthPay.min;
    if (this.perMonthPay.value/1000 != Math.floor(this.perMonthPay.value/1000)) this.perMonthPay.value = (Math.floor(this.perMonthPay.value/1000) + 1) *1000;
  }

  onChangeFirstPay(): void{
    this.calcMonths();
    this.calcPerMonthPay();
  }

  onChangePerMonthPay(){
    this.calcMonthsValue();
    this.validateMonthsValue();
  }

  onChangeMonths(){
    this.calcPerMonthPayValue();
    this.validatePerMonthPayValue();
  }

  calcPerMonthPayValue(){
    this.perMonthPay.value = (this.car.price * ((100-this.firstPay.value)/100)) / (this.months.value);
  }

  calcMonthsValue(){
    this.months.value = (this.car.price * ((100-this.firstPay.value)/100) / this.perMonthPay.value);
  }

  
}
