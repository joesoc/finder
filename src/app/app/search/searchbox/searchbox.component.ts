import { Component, OnInit } from '@angular/core';
import 'chance';
import { TypeaheadKeyService } from '@ux-aspects/ux-aspects';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TypeAheadService } from 'src/app/search/content/typeahead.service';
import { LoggerService } from 'src/app/common/logging/logger.service';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  values: ReadonlyArray<string> = [];

  dropdownOpen: boolean = false;
  selectOnEnter: boolean = true;
  dropDirection: 'up' | 'down' = 'down';
  selectFirst: boolean = true;

  input: string = '';

  loadOptionsFn = this.loadOptions.bind(this);
      /** Load the options and filter the them */
      loadOptions(pageNum: number, pageSize: number, filter: string): Promise<ReadonlyArray<string>> {

        // get the values for the current page based on the filter text provided
        const values = this.values.filter(tag => tag.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
            .slice(pageNum * pageSize, (pageNum + 1) * pageSize);

        // return the values after a delay to simulate server response time
        return of(values).pipe(delay(1000)).toPromise();
    }

    constructor(private svcTypeAhead: TypeAheadService, private logger: LoggerService ) {

        /* Adding values to typeahead list */
        
    }

  populateSearchBox() {
    this.values = [];
    this.svcTypeAhead.getTermExpand(this.input).subscribe(response => {
      response.forEach(term => {
        this.values = [...this.values, term];
        this.logger.log("Term = "+ term);
      });
    });
    
  }

  ngOnInit() {
  }

}
