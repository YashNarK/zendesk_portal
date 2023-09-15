import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppEventService {

  constructor() { }
  public messageEventEmitter: EventEmitter<string> = new EventEmitter()
}
