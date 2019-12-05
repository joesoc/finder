import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdoldbComponent } from './idoldb.component';

describe('IdoldbComponent', () => {
  let component: IdoldbComponent;
  let fixture: ComponentFixture<IdoldbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdoldbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdoldbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
