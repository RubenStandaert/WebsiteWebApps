import { TestBed, inject } from '@angular/core/testing';

import { NotebookDataService } from './notebook-data.service';

describe('NotebookDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotebookDataService]
    });
  });

  it('should be created', inject([NotebookDataService], (service: NotebookDataService) => {
    expect(service).toBeTruthy();
  }));
});
