import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-type-selector',
  templateUrl: './type-selector.component.html',
  styleUrls: ['./type-selector.component.css']
})
export class TypeSelectorComponent {

  typeSelected = 'incident';

  @Output() typeSelectEvent = new EventEmitter<string>();

  ngOnInit(){
    this.typeSelectEvent.emit(this.typeSelected);
  }

  typeSelect(event:MouseEvent){
    this.typeSelected = (event.target as HTMLInputElement).value;
    this.typeSelectEvent.emit(this.typeSelected);
    
  }

}
