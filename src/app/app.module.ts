import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MedicationComponent } from './medication/medication.component';
import { MedicationDetailComponent } from './medication-detail/medication-detail.component';
import { MessagesComponent } from './messages/messages.component';
// import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    MedicationComponent,
    MedicationDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
