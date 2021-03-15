import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  loginUrl = `${environment.apiUrl}/api/user/login`;

  constructor(private http: HttpClient) {
  }

  public login = (userInfo: any) => {
    return this.http.post(this.loginUrl, userInfo)
  }

}

