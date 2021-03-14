import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isAuthenticated: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm  =  this.formBuilder.group({
      email: new FormControl ('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl ('', [Validators.required,Validators.minLength(6), Validators.maxLength(20)])
    });
  }

  get formControls() { return this.loginForm.controls; }

  login = () => {
    this.loginForm.markAllAsTouched()
    if(this.loginForm.invalid){
      return;
    }

    console.log(this.loginForm.value)
    this.router.navigateByUrl('/dashboard')

  }

}
