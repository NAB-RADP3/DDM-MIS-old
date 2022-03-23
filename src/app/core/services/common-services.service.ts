import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService 
{
  constructor() { }

  public getCurrMon(Mon : number):String
  {
    const today = new Date();
    let month = today.getMonth();
    switch(Mon) 
    {
      case 0: // get last month's YYYY-MM date 
      {  
        return today.getFullYear() + "-" + this.monToString(month);
      } 
      case 1: 
      {
        return today.getFullYear() + "-" + this.monToString(month+Mon);
      } 
      case 2:
      {
        let month = today.getMonth() + 2;
        return today.getFullYear() + "-" + this.monToString(month+Mon);  
      }
      default:
      { 
        return today.getFullYear() + "-" + this.monToString(month+Mon);  
      }
    }
  }

  public monToString(month:number):string
  {
    if (month < 10)
    {
      return '0'+ month;
    }
    else
    {
      return month.toString();
    }
  }

}
