import { Injectable } from '@angular/core';
import { IContentGetStatus } from '../../../app/login/interfaces/IGetStatus';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoggerService } from 'src/app/common/logging/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ContentserviceService {
  idolDatabases : Array<string>;
  constructor(private _http:HttpClient, logger: LoggerService) { }

  getDatabases(): Array<string> {
    this.idolDatabases = [];
    this.getDatabasesObs().subscribe(response => {
      if (response.autnresponse.response == "SUCCESS")
      {
        var idolDbs = response.autnresponse.responsedata.databases.database;
        idolDbs.forEach(database => {
          this.idolDatabases.push(database.name);
        });
        return this.idolDatabases;
      }
    });
    return [];
  }

  getDatabasesObs(): Observable<IContentGetStatus> {
    return this._http.get<IContentGetStatus>(`http://${environment.content_ip}:${environment.content_port}/`,{
      params:{
        Action:'GetStatus',
        ResponseFormat:'simplejson'
      }
    });
  }
}
