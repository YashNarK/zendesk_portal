import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTicketComponent } from './ticketManagementComponents/create-ticket/create-ticket.component';
import { PrioritySliderComponent } from './ticketManagementComponents/priority-slider/priority-slider.component';
import { TypeSelectorComponent } from './ticketManagementComponents/type-selector/type-selector.component';
import { TagsSelectorComponent } from './ticketManagementComponents/tags-selector/tags-selector.component';
import { RequesterIdSelectorComponent } from './ticketManagementComponents/requester-id-selector/requester-id-selector.component';
import { SuccessMessageComponent } from './ticketManagementComponents/success-message/success-message.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CreateTicketComponent,
    PrioritySliderComponent,
    TypeSelectorComponent,
    TagsSelectorComponent,
    RequesterIdSelectorComponent,
    SuccessMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
