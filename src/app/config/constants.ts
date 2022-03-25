import { Injectable } from '@angular/core';
import { IpUrl } from "src/app/shared/enums/ip-url";

@Injectable()
export class Constants 
{
    private _ROOT_URL: string = "";
    private readonly DEV_URL: string = "http://localhost:8080";
    private readonly UAT_URL: string = "http://uat.nabard.org:8080";
    private readonly PRD_URL: string = "http://prd.nabard.org:8080";
    
    private readonly _MIS_BASE: string = "/ddmmis/api";
    private readonly _DROPDOWNS: string = "/v1/prerequisites/dropdowns";
    private readonly _MIS1: string = "/mis1/v1/";
    private readonly _MIS2: string = "/mis2/v1/";
    
    private readonly _IMDV1: string = "/imdv/p1";
    private readonly _IMDV2: string = "/imdv/p2";
    private readonly _VU: string = "/vu";
    private readonly _MOCO: string = "/moco";
    private readonly _MCA: string = "/mca";
    private readonly _WSP: string = "/wsp";
    private readonly _BTOR: string = "/btor";
    
    // Operations to be performed
    private readonly _CREATE: string = "/create";
    private readonly _UPDATE: string = "/update";
    
    private readonly _ALL: string = "/all";
    private readonly _VIEW: string = "/view";
    private readonly _FETCHBYFIELDS: string = "/FetchByFields";
    private readonly _REPORTS: string = "/reports";
    
    constructor() { }

    public get ROOT_URL(): string {
        return this._ROOT_URL;
    }
    public get MIS_BASE(): string {
        return this._MIS_BASE;
    }
    public get DROPDOWNS(): string {
        return this._DROPDOWNS;
    }
    public get MIS1(): string {
        return this._MIS1;
    }
    public get MIS2(): string {
        return this._MIS2;
    }
    public get IMDV1(): string {
        return this._IMDV1;
    }
    public get IMDV2(): string {
        return this._IMDV2;
    }
    public get VU(): string {
        return this._VU;
    }
    public get MOCO(): string {
        return this._MOCO;
    }
    public get MCA(): string {
        return this._MCA;
    }
    public get WSP(): string {
        return this._WSP;
    }
    public get BTOR(): string {
        return this._BTOR;
    }
    public get CREATE(): string {
        return this._CREATE;
    }
    public get UPDATE(): string {
        return this._UPDATE;
    }
    public get ALL(): string {
        return this._ALL;
    }
    public get VIEW(): string {
        return this._VIEW;
    }
    public get FETCHBYFIELDS(): string {
        return this._FETCHBYFIELDS;
    }
    public get REPORTS(): string {
        return this._REPORTS;
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
