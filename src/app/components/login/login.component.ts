import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { Store } from '@ngrx/store';

import { loginUser } from '../../state/actions/user.action'
import { getIsAuthenticated } from 'src/app/state/selectors/user.selector';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isAuthenticated: boolean = false;

  constructor(private store: Store,private router: Router, private formBuilder: FormBuilder) {
    this.loginForm  =  this.formBuilder.group({
      email: new FormControl ('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl ('', [Validators.required,Validators.minLength(6), Validators.maxLength(20)])
    });
  }

  ngOnInit() {
    this.loginForm.reset();
  }

  get formControls() { return this.loginForm.controls; }

  login = () => {
    this.loginForm.markAllAsTouched()
    if(this.loginForm.invalid){
      return;
    }

    this.store.dispatch(loginUser(this.loginForm.value));

    this.store.select(getIsAuthenticated).subscribe((res) => {
      this.isAuthenticated = res;
      if(this.isAuthenticated){
        this.router.navigateByUrl('/dashboard');
      }
    })

  }

}
