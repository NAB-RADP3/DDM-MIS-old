export interface imdv
{
    id                : number;
    mis1DisId         :	String;
    mis1MonYear       :	string;
    roApprovalDate    :	string;
    mis1Submitteddate :	string;
    mis1Status        :	number;
    impdevpDist       :	String;
    impdevpEffort     :	String;
    impdevpPLP        :	String;
    impdevpVstrs      :	String;
    createdBy         :	String;
    createdDatetime   :	string;
    modifiedBy        :	String;
    modifiedDatetime  :	string;
    delflag           : boolean
}

export interface imdv2
{
	imdvId           : number;
	mis1DisId        : string;
	mis1MonYear      : string;
    issRefFrmRo      : string;
    issRefFwdDDM     : string;
    suggPolicyIssues : string;
    suppFromRo       : string;
	createdBy        : string;
	createdDatetime  : string;
	modifiedBy       : string;
	modifiedDatetime : string
}

export interface mca
{
    monYear          : string,
    distId           : String,
    meetingName      : String,
    meetingDate      : string,
    convenedBy       : String,
    attended         : Boolean,
    actionPoint      : String,
    btorNo           : String,
    btorDatetime     : string,
    createdBy        : String,
    createdDatetime  : string,
    modifiedBy       : String,
    modifiedDatetime : string,
    delflag          : boolean,
}

export interface mis2
{
    id                   : number,
    mis2abDistid         : String,
    mis2abDate           : number,
    m2aPurpose           : String,
    m2aCategory          : number,
    m2aBlockid           : number,
    m2aPov               : String,
    m2aDisRco            : number,
    m2aRmrk              : String,
    m2aStatus            : number,
    m2aExtractFlag       : number,
    m2aSubmissionDdmDate : number,
    m2aApprovalRoDate    : number,
    m2bCategory          : String,
    m2bPurpose           : String,
    m2bPovFrom           : String,
    m2bPovTo             : String,
    m2bAcwrkdn           : String,
    m2bIsdeviation       : number,
    m2bResDeviation      : String,
    m2bBtorRefno         : String,
    m2bBtorDate          : number,
    m2bStatus            : number,
    m2bSubmissionDdmDate : number,
    m2bApprovalRoDate    : number,
    ctpDistOneWay        : number,
    ctpTotDist           : number,
    ctpModetravel        : String,
    ctpTimeDep           : String,
    ctpTimeArr           : String,
    ctpRemarks           : String,
    ctpStatus            : number,
    ctpExtractFlag       : number,
    ctpSubmissionDdmDate : number,
    ctpApprovalRoDate    : number,
    createdDatetime      : number,
    createdBy            : String,
    modifiedBy           : String,
    modifiedDatetime     : number,
    delflag              : Boolean,
}

export interface moco
{
    mocoId           : number;
    monYear          : string;
    distId           : String;
    agencyName       : String;
    noOfVisits       : number;
    purpose          : String;
    majorOutcome     : String;
    createdBy        : String;
    createdDatetime  : string;
    modifiedBy       : String;
    modifiedDatetime : string;
    delflag          : boolean
}

export interface VU
{
    visitId          : number;
    monYear          : string;
    distId           : String;
    projectCat       : String;
    visitDate        : string;
    particulars      : String;
    btorNo           : String;
    btorDatetime     : string;
    createdBy        : String;
    createdDatetime  : string;
    modifiedBy       : String;
    modifiedDatetime : string;
    delflag          : boolean
}

export interface WSP
{
    workshopId       : number;
    monYear          : string;
    distId           : String;
    progName         : String;
    progDate         : string;
    convenedBy       : String;
    attended         : Boolean;
    issues           : String;
    btorNo           : String;
    btorDatetime     : string;
    createdBy        : String;
    createdDatetime  : string;
    modifiedBy       : String;
    modifiedDatetime : string;
    delflag          : boolean
}
