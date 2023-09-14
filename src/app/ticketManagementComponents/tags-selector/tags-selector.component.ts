import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tags-selector',
  templateUrl: './tags-selector.component.html',
  styleUrls: ['./tags-selector.component.css']
})
export class TagsSelectorComponent {
tags:string[]=[];
@Output() tagsSelectEvent=new EventEmitter<string>();



setTags(event:Event){
    event.preventDefault();
    const enteredText = (event.target as HTMLInputElement).value.trim();
    if(enteredText){
      this.tags.unshift(enteredText.replace(/ /g,"_"));
      // Clear the input field
      (event.target as HTMLInputElement).value = '';

      this.tagsSelectEvent.emit(this.tags.join(' '))
    }
  
  }

  deleteTags(value:string){
    let tagToBeDeleted = value.trim().replace(/ /g,'_');
    this.tags.splice( this.tags.findIndex( a=>a===tagToBeDeleted),1)
    this.tagsSelectEvent.emit(this.tags.join(' '))
  }
}
