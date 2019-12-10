import { TestBed } from '@angular/core/testing';

import { TypeAheadServiceMock  } from './typeahead.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoggerService } from 'src/app/common/logging/logger.service';

describe('TypeaheadService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[TypeAheadServiceMock, LoggerService] 
  }));

  it('returns more than one word', () => {
    const service: TypeAheadServiceMock = TestBed.get(TypeAheadServiceMock);
    const logger: LoggerService = TestBed.get(LoggerService);

    service.getTermExpandObs("system").subscribe(response => {
      expect(response.autnresponse.response).toBe("SUCCESS");
      response.autnresponse.responsedata.term.forEach(word => {
        logger.log(word);
      });
    })
  });
});
