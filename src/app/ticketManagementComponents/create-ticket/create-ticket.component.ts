import { Component } from '@angular/core';
import { AxiosService } from 'src/app/services/axios-service.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent {

  constructor(private axiosService:AxiosService){}

  

}
