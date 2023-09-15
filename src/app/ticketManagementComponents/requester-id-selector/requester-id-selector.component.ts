import { Component,Output,EventEmitter } from '@angular/core';
import { AxiosService } from 'src/app/services/axios-service.service';
import { AppEventService } from 'src/app/services/app-event.service';
@Component({
  selector: 'app-requester-id-selector',
  templateUrl: './requester-id-selector.component.html',
  styleUrls: ['./requester-id-selector.component.css']
})
export class RequesterIdSelectorComponent {

key='';
constructor(private axiosService:AxiosService, private appEventService:AppEventService){}

ngOnInit(){
  this.appEventService.messageEventEmitter.subscribe((data:string)=>{
    if(data==='reset'){
      this.key='';
      this.noMatch=false;
      this.toSearch=false;
      this.userList=[];
    }
  })
}

userList:{ id: number; name: string; email: string,role:string }[]= [];

noMatch:boolean=false;
toSearch:boolean=false;

axiosInstance = this.axiosService.createAxiosInstance();

@Output() requesterEvent = new EventEmitter<number>();

getUsers(event:Event){
      this.toSearch=true;
      let searchKey = (event.target as HTMLInputElement).value

      if(searchKey.length>=4){

        this.axiosInstance.get(`/api/v2/users/search.json?query=${searchKey}`)
        .then((response)=>{
          let users = response.data.users;

          users = users.map(
            (a:{ id: number; name: string; email: string,role:string })=>{return {id:a.id,name:a.name,email:a.email,role:a.role}}
            )

          if(users.length===0)this.noMatch=true
          else this.noMatch=false

          this.userList=users;
        })
        .catch((error)=>{console.error(error)});
      }
      else{
        this.userList=[]
        this.noMatch=false
      }

    }

    selectUser(value:{ id: number; name: string; email: string,role:string }){
      this.requesterEvent.emit(value.id);
      this.key=value.email;
      this.toSearch=false;
    }

}
