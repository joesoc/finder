import { TestBed } from '@angular/core/testing';

import { TypeAheadServiceMock  } from './typeahead.service';
import { TypeAheadService } from './typeahead.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoggerService } from 'src/app/common/logging/logger.service';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';

describe('TypeaheadService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[TypeAheadServiceMock, LoggerService] 
  }));

  xit('returns success when getTermExpandObs called', () => {
    const service: TypeAheadServiceMock = TestBed.get(TypeAheadServiceMock);
    const logger: LoggerService = TestBed.get(LoggerService);

    service.getTermExpandObs("system").subscribe(response => {
      expect(response.autnresponse.response).toBe("SUCCESS");
      response.autnresponse.responsedata.term.forEach(word => {
        logger.log(word);
      });
    })
  });

  it('returns more than one word Mock', () => {
    const service: TypeAheadServiceMock = TestBed.get(TypeAheadServiceMock);
    const logger: LoggerService = TestBed.get(LoggerService);

    service.getTermExpand("system").subscribe(response => {
      expect(response.length).toBeGreaterThan(3);
    });
  });

  it('returns more than one word', () => {
    const service: TypeAheadService = TestBed.get(TypeAheadService);
    const logger: LoggerService = TestBed.get(LoggerService);

    service.getTermExpand("system").subscribe(response => {
      
      response.forEach(element => {
        logger.log("Word - " + element);
      })
      expect(response.length).toBeGreaterThan(3);
    });
  });
});
