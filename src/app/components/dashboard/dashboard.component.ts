import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loginUserFailure } from 'src/app/state/actions/user.action';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private store:Store, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.store.dispatch(loginUserFailure())
    this.router.navigateByUrl('/login');
  }

}
