import { Component, Output, EventEmitter } from '@angular/core';
import { AppEventService } from 'src/app/services/app-event.service';

@Component({
  selector: 'app-priority-slider',
  templateUrl: './priority-slider.component.html',
  styleUrls: ['./priority-slider.component.css']
})
export class PrioritySliderComponent {

  constructor(private appEventService:AppEventService){}


priority = 'low'

@Output() priorityEvent = new EventEmitter<string>();
ngOnInit() {
  // Emit the initial value when the component initializes
  this.priorityEvent.emit(this.priority);
  this.appEventService.messageEventEmitter.subscribe((data:string)=>{
    if(data==='reset'){
      this.priority='low'
    }
  })
}

setPriority(value:string){
  this.priority=value;
  this.priorityEvent.emit(this.priority);
}
}
