import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
describe('UserService', () => {
    let service: HttpService
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, HttpClientTestingModule]
  }));

  beforeEach(() => {
    service = TestBed.inject(HttpService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('login', () => {
    expect(service.login({})).toBeDefined()
  })
});
