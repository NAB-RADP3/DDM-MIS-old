import { Injectable } from '@angular/core';
import { IpUrl } from "src/app/shared/enums/ip-url";

@Injectable()
export class Constants 
{
    private _ROOT_URL: string = "";
    private readonly DEV_URL: string = "http://localhost:8080";
    private readonly UAT_URL: string = "http://uat.nabard.org:8080";
    private readonly PRD_URL: string = "http://prd.nabard.org:8080";
    
    private readonly MIS_BASE: string = "/ddmmis/api";
    private readonly DROPDOWNS: string = "/v1/prerequisites/dropdowns";
    private readonly MIS1: string = "/mis1/v1/";
    private readonly MIS2: string = "/mis2/v1/";
    
    private readonly IMDV1: string = "/imdv/p1";
    private readonly IMDV2: string = "/imdv/p2";
    private readonly VU: string = "/vu";
    private readonly MOCO: string = "/moco";
    private readonly MCA: string = "/mca";
    private readonly WSP: string = "/wsp";
    private readonly BTOR: string = "/btor";
    
    // Operations to be performed
    private readonly CREATE: string = "/create";
    private readonly UPDATE: string = "/update";
    
    private readonly ALL: string = "/all";
    private readonly VIEW: string = "/view";
    private readonly FETCHBYFIELDS: string = "/FetchByFields";
    private readonly REPORTS: string = "/reports";
    
    constructor() { }

    public get ROOT_URL(): string {
        return this._ROOT_URL;
    }
    
    public set ROOT_URL(v: IpUrl | string) {
        switch (v) {
            case IpUrl.DEV:
                this._ROOT_URL = this.DEV_URL
                break;
                case IpUrl.PRD:
                    this._ROOT_URL = this.PRD_URL
                    break;
                    case IpUrl.UAT:
                        this._ROOT_URL = this.UAT_URL
                        break;
                        
                        default: this._ROOT_URL = this.DEV_URL
                        break;
        }
    }

}
