export interface TypeAheadResponsse {
    autnresponse: Autnresponse;
}

export interface Autnresponse {
    action:       string;
    response:     string;
    responsedata: Responsedata;
}

export interface Responsedata {
    term:            string[];
    number_of_terms: string;
}
