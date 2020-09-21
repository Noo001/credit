import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { CreditComponent } from './components/credit/credit.component';
import { SuccessComponent } from './components/success/success.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import {MatDividerModule} from '@angular/material/divider';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { CarListComponent } from './components/car-list/car-list.component';

@NgModule({
  declarations: [
    CarListComponent,
    AppComponent,
    CarComponent,
    CreditComponent,
    SuccessComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatDividerModule,
    MatSliderModule,
    MatCardModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    //{ provide: MAT_DIALOG_DATA, useValue: [] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
