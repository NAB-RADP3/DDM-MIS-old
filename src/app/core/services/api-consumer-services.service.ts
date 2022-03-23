import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonServicesService } from "./common-services.service";
import { generate, Observable } from 'rxjs';
import { loginFields } from "src/app/logindetails";
import { Mis1StatusRequest } from '../../core/models/mis1-status-request.model';
import { Mis1StatusResponse } from '../models/mis1-status-response';
import { Ipconfigs } from './UtilClasses/ipconfigs';

@Injectable({
  providedIn: 'root'
})
export class ApiConsumerServicesService 
{
  private logdetails!: loginFields;

  private comser: CommonServicesService = new CommonServicesService;
  
  // private ip!: Ipconfigs;

  constructor(
     private http : HttpClient,
     private _ipConfigService: Ipconfigs
     ) 
  {
  }

  mis1statusreqJSON = new Mis1StatusRequest(
    {
      monYear : this.comser.getCurrMon(1) , distId: 1 , 
      fields: ["mis1Status", "mis1Submitteddate" , "mis1MonYear"]
    });
  
  public get_Mis1_Last_Mon_Status(): Observable <any>
  {
    console.log(this._ipConfigService.mis1IP +"FetchByFields");
    return this.http.post<any>( this._ipConfigService.mis1IP + "FetchByFields",this.mis1statusreqJSON);
  }

}
