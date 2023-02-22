import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MedicationComponent } from './medication/medication.component';
import { MedicationDetailComponent } from './medication-detail/medication-detail.component';
import { MessagesComponent } from './messages/messages.component';
// import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';
import { ClickTimeComponent } from './click-time/click-time.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';



@NgModule({
  declarations: [
    AppComponent,
    MedicationComponent,
    MedicationDetailComponent,
    MessagesComponent,
    ClickTimeComponent,
    NavHeaderComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
