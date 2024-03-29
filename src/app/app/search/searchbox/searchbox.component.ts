import { Component, OnInit } from '@angular/core';
import 'chance';
import { TypeaheadKeyService } from '@ux-aspects/ux-aspects';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  values: ReadonlyArray<string> = ["Vinay Joseph", "Vanessa Williams", "Vijay Kumar"];

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

    constructor(public typeaheadKeyService: TypeaheadKeyService<string>) {

        /* Adding values to typeahead list */

    }

  ngOnInit() {
  }

}
