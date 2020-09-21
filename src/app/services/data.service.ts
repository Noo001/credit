import { Injectable } from '@angular/core';

export interface ICar{
  name: string;
  price: number;
  image: string;
}

class Data{
  cars: ICar[] =
    [
      {
        name: 'Mersedes S5000',
        price: 7000000,
        image: '/assets/images/1.jpg'
      },
      {
        name: 'Infiniti SQL9.6',
        price: 945000,
        image: '/assets/images/2.jpg'
      }
    ]
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: Data = new Data;
  private crPlan: string = '';
  constructor() { }

  get getData(): ICar[]{
    return this.data.cars;
  }

  get getCrPlan(): string{
    return this.crPlan;
  }

  set setCrPlan(plan: string) {
    this.crPlan = plan;
  }
}
