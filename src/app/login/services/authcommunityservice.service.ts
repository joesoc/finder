import { Injectable } from '@angular/core';
import { ICommunityResponse } from 'src/app/login/interfaces/ICommunityResponse';
import { User } from 'src/app/login/interfaces/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators'
import { LoggerService } from 'src/app/common/logging/logger.service';


@Injectable({
  providedIn: 'root'
})
export class AuthCommunityService {
  currentUser: User;
  logger: LoggerService;
  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }
  get loggedInUser(): User {
    return this.loggedInUser;
  }
  constructor(private _http: HttpClient, logger: LoggerService) { 
    this.logger = logger;
  }

  logout(): void {
    this.currentUser = null;
  }

  login( userName: string,password: string ): Observable<ICommunityResponse> {
    return this.authenticate(userName, password).pipe(tap(response =>{
      if(response.autnresponse.response == "SUCCESS"){
        this.logger.log("Logged in Success");
        var _numRoles = response.autnresponse.responsedata.numroles;
        let _isAdmin: boolean;
        if (Number(_numRoles) > 0){
          this.logger.log("More than one Role detected");
            var roles = response.autnresponse.responsedata.role;
            _isAdmin = roles.includes("FindAdmin");
            this.logger.log("User is part of Admin role = "+ _isAdmin);
        }
        let _isAuthenticated: string;
        _isAuthenticated = response.autnresponse.responsedata.authenticate;
        this.logger.log("Value of _isAuthenticated = " + _isAuthenticated);
        if(_isAuthenticated == "true"){
          this.currentUser = {
            id: Number(response.autnresponse.responsedata.uid),
            isAdmin:_isAdmin,
            userName: response.autnresponse.responsedata.username
         }
         return;
        }
      }
      this.logger.log("autnresponse = " + response.autnresponse.response);
        }));
  }

  private authenticate(userName: string, password: string): Observable<ICommunityResponse> {
    return this._http.get<ICommunityResponse>(`http://${environment.community_ip}:${environment.community_port}/`, {
      params: {
        Action: 'UserRead',
        Username: userName,
        Password: password,
        ResponseFormat: "simplejson",
        RoleList:"True"
      }
    });
  }
}
