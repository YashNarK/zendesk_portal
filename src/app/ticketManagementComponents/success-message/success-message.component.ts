import { Component } from '@angular/core';
import { AppEventService } from 'src/app/services/app-event.service';
import { CreateTicketComponent } from '../create-ticket/create-ticket.component';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css']
})
export class SuccessMessageComponent {
  ticketUrl:string;
  ticketNo:string;
  constructor(private appEventService:AppEventService){
  this.ticketUrl=appEventService.getReceivedUrl();
  this.ticketNo=appEventService.getReceivedTicketNo();
  }
 

}
