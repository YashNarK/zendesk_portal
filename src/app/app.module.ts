import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTicketComponent } from './ticketManagementComponents/create-ticket/create-ticket.component';
import { PrioritySliderComponent } from './ticketManagementComponents/priority-slider/priority-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTicketComponent,
    PrioritySliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
