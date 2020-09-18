import { Component, OnInit, Input } from '@angular/core';
import { ICar } from 'src/app/services/data.service';

@Component({
  selector: 'car-block',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  @Input() public car: ICar;
  img = "";
  
  constructor() { }

  ngOnInit(): void {
    this.img = "url(" + this.car.image + ")";
  }

}
