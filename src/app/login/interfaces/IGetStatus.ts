export interface  IContentGetStatus{
    autnresponse: autnresponseContent
}

interface autnresponseContent{
    action: string,
    response:string,
    responsedata: responsedataContentGetStatus
}

interface responsedataContentGetStatus{
    product: string,
    version: string,
    build: string,
    licensed_languages: string,
    indexport: number,
    queryport: number,
    aciport:number,
    serviceport: number,
    directory: string,
    querythreads: string,
    acithreads:string,
    termsperdoc: number,
    suggestterms: number,
    documents: number,
    document_sections: string,
    committed_documents: string,
    deleted_sections: string,
    indexed_data_gb: string,
    full: boolean,
    full_ratio: boolean,
    terms: number,
    total_terms:number,
    term_hashes: number,
    record_size: number,
    max_occurrences: number,
    mindate: string,
    maxdate: string,
    mindatestring: string,
    maxdatestring: string,
    ref_fields:number,
    ref_hashes:string
    indexqueue: indexqueueElement,
    fieldcodes: fieldcodesElement,
    databases: databasesElement
}

interface indexqueueElement{
    indexqueuereceived:number,
    indexqueuecompleted: number,
    indexqueuequeued: number,
    initialid: number
}

interface fieldcodesElement{
    base: number,
    total: number
}

interface databasesElement {
    max_databases: number,
    num_databases: number,
    active_databases: number,
    database:databaseElement[]

}

interface databaseElement {
    name: string,
    documents: number,
    sections: number,
    internal: boolean,
    readonly: boolean,
    expiry_hours: string,
    expiry_action: string
}

interface language_typeElement{
    no_of_language_types:number,
    language_type: language_type
}

interface language_type {
    name: string,
    language: string,
    encoding: string,
    documents: number,
    sections: number
}