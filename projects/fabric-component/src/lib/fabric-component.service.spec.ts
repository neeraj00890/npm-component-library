import { TestBed } from '@angular/core/testing';

import { FabricComponentService } from './fabric-component.service';

describe('FabricComponentService', () => {
  let service: FabricComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FabricComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
