import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ImcCalcComponent } from './imc-calc/imc-calc.component';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ImcCalcComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    NgFor
  ],
  providers: [],
  bootstrap: [AppComponent,ImcCalcComponent,AlertComponent]
})
export class AppModule { }
