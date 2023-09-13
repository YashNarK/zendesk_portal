import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  getZendeskApiToken():string{
    const user = environment.zendeskUserId;
    const token = environment.zendeskApiToken;
    return `${user}/token:${token}`
  }
}
