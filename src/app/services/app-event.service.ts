import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppEventService {

  constructor() { }
  public messageEventEmitter: EventEmitter<string> = new EventEmitter();
  
  private receivedUrl:string='';
  private receivedTicketNo='';

  getReceivedUrl(){
    return this.receivedUrl;
  }
  setReceivedUrl(value:string){
    let url = value.split('/');
    url[3]='agent';
    url.splice(4,1);
    url[url.length-1]=url[url.length-1].replace(".json",'');
    value = url.join('/') ;
    this.receivedUrl=value;
  }

  getReceivedTicketNo(){
    return this.receivedTicketNo;
  }
  setReceivedTicketNo(value:string){
    let url = value.split('/');
    value =url[url.length-1].replace(".json",'');
    this.receivedTicketNo=value;
  }

}
