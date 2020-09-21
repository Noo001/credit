import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {
  plan: string;

  constructor(@Inject(MAT_DIALOG_DATA) private data) { 
    this.plan = data.plan;
  }

}
