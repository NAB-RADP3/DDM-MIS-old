import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Ipconfigs {
  private readonly _mis1IP: string = "http://localhost:8080/ddmmis/api/mis1/v1/";
  private readonly _mis2IP: string = "http://localhost:8080/ddmmis/api/mis2/v1/";

  public get mis2IP(): string {
    return this._mis2IP;
  }
  public get mis1IP(): string {
    return this._mis1IP;
  }
}
