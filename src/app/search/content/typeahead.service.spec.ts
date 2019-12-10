import { TestBed } from '@angular/core/testing';

import { TypeAheadServiceMock  } from './typeahead.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoggerService } from 'src/app/common/logging/logger.service';

describe('TypeaheadService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[TypeAheadServiceMock, LoggerService] 
  }));

  it('returns a successful response', () => {
    const service: TypeAheadServiceMock = TestBed.get(TypeAheadServiceMock);
    const logger: LoggerService = TestBed.get(LoggerService);

    service.getTermExpandObs("system").subscribe(response => {
      expect(response.autnresponse.response).toBe("SUCCESS");
      response.autnresponse.responsedata.term.forEach(word => {
        logger.log(word);
      });
    })
  });

  it('it returns more than 4 words', () => {
    const service: TypeAheadServiceMock = TestBed.get(TypeAheadServiceMock);
    const logger: LoggerService = TestBed.get(LoggerService);

    service.getTermExpand("System").subscribe(response => {
      expect(response.length).toBeGreaterThan(4);
    });
  });
});
