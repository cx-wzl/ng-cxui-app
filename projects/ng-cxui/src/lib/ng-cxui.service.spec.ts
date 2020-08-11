import { TestBed } from '@angular/core/testing';

import { NgCxuiService } from './ng-cxui.service';

describe('NgCxuiService', () => {
  let service: NgCxuiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCxuiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
