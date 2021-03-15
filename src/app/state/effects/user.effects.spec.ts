import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of, ReplaySubject } from 'rxjs';
import { AppEffects } from './user.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from 'src/app/services/http.service';

describe('AppEffects', () => {
  let actions$: ReplaySubject<any>;
  let effects: AppEffects;
  let httpService:any;

  beforeEach(() => {
      httpService = {
          login: () => {
              return of({status: 200, Message: 'Login Successfull'})
          }
      }
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AppEffects,
        provideMockActions(() => actions$),
        {provide:HttpService, useValue:httpService}
      ]
    });

    effects = TestBed.inject<AppEffects>(AppEffects);

  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should result in login user success when credentials are correct', () => {
      actions$ = new ReplaySubject(1)
      actions$.next({type:'[User] Login Users', data:null})
      effects.loginUser.subscribe((data: any) => {
          expect(data.type).toBe('[User] Login User Success')
      })
  })
});
