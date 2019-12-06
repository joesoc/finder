import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ContentserviceServiceMock as ContentService } from './contentservice.service';
import { LoggerService } from 'src/app/common/logging/logger.service';
import { tap, subscribeOn } from 'rxjs/operators';

describe('#getDatabases', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[ContentService, LoggerService]
  }));

  it('should return more than one IDOL db', (done) => {
    const service: ContentService = TestBed.get(ContentService);
    const logger: LoggerService = TestBed.get(LoggerService);

    service.getDatabases().subscribe(databases => {

      logger.log("databases Length = " + databases.length);
      expect(databases.length).toBeGreaterThan(0);
      done();

    });
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


