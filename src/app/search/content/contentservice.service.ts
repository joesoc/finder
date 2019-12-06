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
  constructor(private _http:HttpClient, private logger: LoggerService) { }

  getDatabases(): Array<string> {
    this.idolDatabases = [];
    this.getDatabasesObs().subscribe(response => {
      this.logger.log("response = " + response.autnresponse.response.toString());
      if (response.autnresponse.response == "SUCCESS")
      {
        var idolDbs = response.autnresponse.responsedata.databases.database;
        idolDbs.forEach(database => {
          this.logger.log("Database Name = "+database.name);
          this.idolDatabases.push(database.name);
        });
      }
    });
    return this.idolDatabases;
  }

  getDatabasesObs(): Observable<IContentGetStatus> {
    let url = `http://${environment.content_ip}:${environment.content_port}/`;
    return this._http.get<IContentGetStatus>( url ,{
      params:{
        Action:'GetStatus',
        ResponseFormat:'simplejson'
      }
    });
  }
}
