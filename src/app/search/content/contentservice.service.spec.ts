import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ContentserviceService } from './contentservice.service';
import { LoggerService } from 'src/app/common/logging/logger.service';
import { tap } from 'rxjs/operators';

describe('#getDatabases', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[ContentserviceService, LoggerService]
  }));

  it('should return more than one IDOL db', () => {
    const service: ContentserviceService = TestBed.get(ContentserviceService);
    const logger: LoggerService = TestBed.get(LoggerService);
    logger.log("databases Length = " + service.getDatabases().length);
    expect(service.getDatabases().length > 0).toBe(false);
    });

  it('should return Observable<IContentGetStatus>', () => {
    const service: ContentserviceService = TestBed.get(ContentserviceService);
    const logger: LoggerService = TestBed.get(LoggerService);
    service.getDatabasesObs().pipe(tap(response => {
          logger.log("Debugging response from IDOL");
          logger.log("response from IDOL " + response.autnresponse.response);
          expect(response.autnresponse.response).toEqual("False");
    }));
  })
})


