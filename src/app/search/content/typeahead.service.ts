import { Injectable } from '@angular/core';
import { TypeAheadResponsse } from '../content/interface/typeaheadresponse';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITypeAheadService } from './interface/Itypeahead.service';

@Injectable({
  providedIn: 'root'

})
export class TypeAheadService implements ITypeAheadService {
  words : Array<String>;
  constructor(private _http: HttpClient) 
  {

  }
  getTermExpand
  getTermExpandObs(word: string) : Observable<TypeAheadResponsse> {
    let url = `http://${environment.content_ip}:${environment.content_port}/`;
    return this._http.get<TypeAheadResponsse>( url , {
      params:{
        Action:'TermExpand',
        ResponseFormat:'simplejson',
        Text: word
      }
    });
  }
}

@Injectable()
export class TypeAheadServiceMock extends TypeAheadService implements ITypeAheadService {
  getTermExpandObs(word:String){
    return of({"autnresponse":{"action":"TERMEXPAND","response":"SUCCESS","responsedata":{"term":["MYSYSTEM","SISTER","SSET","SSETMN","STEM","SYSTEM","SYSTEM32","SYSTEMAT","SYSTEMD","SYSTEMIN","SYSTEMV","SYSTIM"],"number_of_terms":"12"}}} as TypeAheadResponsse);
  }
}