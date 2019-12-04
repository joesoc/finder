import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdoldatabasedropdownComponent } from './idoldatabasedropdown.component';

describe('IdoldatabasedropdownComponent', () => {
  let component: IdoldatabasedropdownComponent;
  let fixture: ComponentFixture<IdoldatabasedropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdoldatabasedropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdoldatabasedropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
