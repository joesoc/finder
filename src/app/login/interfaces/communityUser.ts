export interface Autnresponse {
    action:       string;
    response:     string;
    responsedata: Responsedata;
}

export interface Responsedata {
    numroles:       string;
    authenticate:   string;
    role:           string[];
    uid:            string;
    username:       string;
    locked:         string;
    lockedlasttime: string;
    maxagents:      string;
    numagents:      string;
    lastloggedin:   string;
    fields:         Fields;
    numfields:      string;
}

export interface Fields {
    department: string;
    email:      string;
    manager:    string;
    phoneext:   string;
    photo:      string;
}
export interface Autnresponse {
    action:       string;
    response:     string;
    responsedata: Responsedata;
}

export interface Responsedata {
    numroles:       string;
    authenticate:   string;
    role:           string[];
    uid:            string;
    username:       string;
    locked:         string;
    lockedlasttime: string;
    maxagents:      string;
    numagents:      string;
    lastloggedin:   string;
    fields:         Fields;
    numfields:      string;
}

export interface Fields {
    department: string;
    email:      string;
    manager:    string;
    phoneext:   string;
    photo:      string;
}
