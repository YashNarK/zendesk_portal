import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-priority-slider',
  templateUrl: './priority-slider.component.html',
  styleUrls: ['./priority-slider.component.css']
})
export class PrioritySliderComponent {
priority = 'low'

@Output() priorityEvent = new EventEmitter<string>();
ngOnInit() {
  // Emit the initial value when the component initializes
  this.priorityEvent.emit(this.priority);
  console.log(this.priority)
}

setPriority(value:string){
  this.priority=value;
  this.priorityEvent.emit(this.priority);
  console.log(this.priority)
}
}
