import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  getZendeskApiToken():string{
    return environment.zendeskApiToken;
  }
}
