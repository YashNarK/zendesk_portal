import { Component } from '@angular/core';
import { AxiosService } from 'src/app/services/axios-service.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
// priority: low, normal, high, urgent
// type: question, incident, problem, task
// 13656143162386 - mindtree user, 13660615687954 - gmail user

export class CreateTicketComponent {
  urlPath= '/api/v2/tickets';
  description = '';
  priority = 'low';
  subject = '';
  type='incident';
  tags='';
  requester_id='';
  

  hvacPartnerIDfieldID='13706916578066';
  hvacPartnerID='';
  
  ticketFormId='13656159167250';

  payload =`{
    "ticket": {
      "comment": {
        "body": "The smoke is very colorful."
      },
      "priority": "normal",
      "subject": "No worries. All Good.",
      "type":"problem",
      "tags":"test HVAC_portal_ticket",
      "requester_id":"13656143162386",
      "custom_fields": [
        {
            "id": "${this.hvacPartnerIDfieldID}",
            "value": "My HVAC partners id."
        }
    ],
    "ticket_form_id":"${this.ticketFormId}"
      

    }
  }`
  constructor(private axiosService:AxiosService){}

  
    axiosInstance = this.axiosService.createAxiosInstance();
    createTicket(){

      this.axiosInstance.post(this.urlPath,this.payload,{
        method:'POST',
        headers:{'Content-Type':'application/json'}
      })
      .then((response)=>{
       console.log(response)
      })
      .catch((error)=>{
        console.error(error);
      })
    
    
    }
    setPriority(value:string){
      this.priority=value;
    }
    setType(value:string){
      this.type=value;
    }
    setTag(value:string){
      this.tags=value;
    }

    // getTicket(){
    //   this.axiosInstance.get(this.urlPath)
    //   .then((response)=>{console.log(response.data.tickets[0])})
    //   .catch((error)=>{console.error(error)})
    // }

    // getUser(){
    //   this.axiosInstance.get(`/api/v2/users/search.json?query=naren`)
    //   .then((response)=>{console.log(response)})
    //   .catch((error)=>{console.error(error)});
    // }
   
}
