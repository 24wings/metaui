import { TestBed } from '@angular/core/testing';

import { MetaUiService } from './meta-ui.service';

describe('MetaUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetaUiService = TestBed.get(MetaUiService);
    expect(service).toBeTruthy();
  });
});
