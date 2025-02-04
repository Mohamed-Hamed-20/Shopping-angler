import { TestBed } from '@angular/core/testing';

import { RecipeRequestsService } from './recipe-requests.service';

describe('RecipeRequestsService', () => {
  let service: RecipeRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
