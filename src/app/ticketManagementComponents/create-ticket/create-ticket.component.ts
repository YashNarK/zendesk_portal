import { Component } from '@angular/core';
import { AxiosService } from 'src/app/services/axios-service.service';
import { AppEventService } from 'src/app/services/app-event.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
// priority: low, normal, high, urgent
// type: question, incident, problem, task
// 13656143162386 - mindtree user, 13660615687954 - gmail user

export class CreateTicketComponent {


  urlPath:string;
  description:string;
  priority:string;
  subject:string;
  type:string;
  tags:string;
  requester_id:string;
  // constant ID for custom field. check in zendesk admin center
  hvacPartnerIDfieldID:string;
  hvacPartnerID:string;
  // constant ID for ticket form template. check in zendesk admin center
  ticketFormId:string;
  payload:String;

  constructor(private axiosService:AxiosService, private appEventService:AppEventService){
    this.urlPath= '/api/v2/tickets';
    this.description = '';
    this.priority = 'low';
    this.subject = '';
    this.type='incident';
    this.tags='';
    this.requester_id='';
    this.hvacPartnerIDfieldID='13706916578066';
    this.hvacPartnerID='';
    this.ticketFormId='13656159167250';
    this.payload =''
  }

  
    axiosInstance = this.axiosService.createAxiosInstance();

    resetValues(){
      this.urlPath= '/api/v2/tickets';
      this.description = '';
      this.priority = 'low';
      this.subject = '';
      this.type='incident';
      this.tags='';
      this.requester_id='';
      this.hvacPartnerIDfieldID='13706916578066';
      this.hvacPartnerID='';
      this.ticketFormId='13656159167250';
      this.payload =''
      this.appEventService.messageEventEmitter.emit('reset');
    }

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


}
