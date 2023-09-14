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
  

  // constant ID for custom field. check in zendesk admin center
  hvacPartnerIDfieldID='13706916578066';
  hvacPartnerID='';
  
  // constant ID for ticket form template. check in zendesk admin center
  ticketFormId='13656159167250';

  payload =''
  constructor(private axiosService:AxiosService){}

  
    axiosInstance = this.axiosService.createAxiosInstance();
    createTicket(){
      this.payload=`{
        "ticket": {
          "comment": {
            "body": "${this.description.replace(/\n/g, '\\n')}"
          },
          "priority": "${this.priority}",
          "subject": "${this.subject}",
          "type":"${this.type}",
          "tags":"${this.tags}",
          "requester_id":"${this.requester_id}",
          "custom_fields": [
            {
                "id": "${this.hvacPartnerIDfieldID}",
                "value": "${this.hvacPartnerID}"
            }
        ],
        "ticket_form_id":"${this.ticketFormId}"
          
    
        }
      }`
      console.log(this.payload);
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
    setRequesterId(value:number){
      this.requester_id=(value as unknown) as string;
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
