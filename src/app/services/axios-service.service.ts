import { Injectable } from '@angular/core';
import axios from 'axios';
import {AuthService} from '../services/auth-service.service'

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor(private authservice:AuthService) { }

  createAxiosInstance(){
    const instance = axios.create({
      baseURL:'https://ltimindtree1994.zendesk.com/',
    });
    // Add the authorization header using Basic Authentication
    instance.interceptors.request.use(
      (config)=>{
        const credentials = this.authservice.getZendeskApiToken();
        if(credentials){
          config.headers['Authorization']=`Basic ${btoa(credentials)}`
        }
        return config;
      },
      (error)=>{
        return Promise.reject(error);
      }
    )
    return instance;
  }
}
