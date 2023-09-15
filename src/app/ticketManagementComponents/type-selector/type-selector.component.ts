import { Component,Output,EventEmitter } from '@angular/core';
import { AppEventService } from 'src/app/services/app-event.service';

@Component({
  selector: 'app-type-selector',
  templateUrl: './type-selector.component.html',
  styleUrls: ['./type-selector.component.css']
})
export class TypeSelectorComponent {

  typeSelected = 'incident';

  constructor(private appEventService:AppEventService){}
  @Output() typeSelectEvent = new EventEmitter<string>();

  ngOnInit(){
    this.typeSelectEvent.emit(this.typeSelected);
    this.appEventService.messageEventEmitter.subscribe((data)=>{
      if(data==='reset'){
        this.typeSelected='incident';
      }
    })
  }

  typeSelect(event:MouseEvent){
    this.typeSelected = (event.target as HTMLInputElement).value;
    this.typeSelectEvent.emit(this.typeSelected);
    
  }

}
