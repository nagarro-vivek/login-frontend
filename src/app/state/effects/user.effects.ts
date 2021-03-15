import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { loginUser, loginUserSuccess, loginUserFailure } from '../actions/user.action';
import { HttpService } from '../../services/http.service';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private httpService: HttpService) {}

  loginUser = createEffect(() => this.actions$.pipe(
    ofType(loginUser),
    switchMap((action: any) => this.httpService.login({email : action.email, password: action.password}).pipe(
      map(() => 
        loginUserSuccess()
      ),
      catchError((err: any) =>
       of(loginUserFailure())
      )
    ))
  ))
 
}
