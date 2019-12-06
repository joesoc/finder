import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ContentserviceService as ContentService } from './contentservice.service';
import { LoggerService } from 'src/app/common/logging/logger.service';
import { tap, subscribeOn } from 'rxjs/operators';

describe('#getDatabases', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[ContentService, LoggerService]
  }));

  it('should return more than one IDOL db', () => {
    const service: ContentService = TestBed.get(ContentService);
    const logger: LoggerService = TestBed.get(LoggerService);
    logger.log("databases Length = " + service.getDatabases().length);
    expect(service.getDatabases().length).toBeGreaterThan(0);
  });

  it('should return Observable<IContentGetStatus>', () => {
    const service: ContentService = TestBed.get(ContentService);
    const logger: LoggerService = TestBed.get(LoggerService);
    service.getDatabasesObs().subscribe(response => {
          logger.log("Debugging response from IDOL");
          logger.log("response from IDOL " + response.autnresponse.response);
    });
  })
})


