import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore;
  const initialState = { isAuthenticated: false };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
      declarations: [ LoginComponent ],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form control', () => {
    expect(component.formControls).toBeDefined()
  })
  describe("Login", () => {
      it('Invalid credentials', () => {
        component.formControls.email.setValue("")
        component.formControls.password.setValue("")
        spyOn(store, 'dispatch')
        component.login();
        expect(store.dispatch).not.toHaveBeenCalled()
      })

      it('Valid Credentials', () => {
        component.formControls.email.setValue("vivek@gmail.com")
        component.formControls.password.setValue("jaikumar")
        spyOn(store, 'dispatch')
        component.login();
        expect(store.dispatch).toHaveBeenCalled()
      })

      it('Authentication Success', inject([Router], (router: Router) => {
        component.formControls.email.setValue("mtnuser@gmail.com")
        component.formControls.password.setValue("MTN281#^@*")
        spyOn(store, 'select').and.returnValue(of(true))
        spyOn(router, 'navigateByUrl')
        component.login();
        expect(router.navigateByUrl).toHaveBeenCalledWith('/dashboard')
      }))

      it('Authentication Failure', inject([Router], (router: Router) => {
        component.formControls.email.setValue("mtnuser@gmail.com")
        component.formControls.password.setValue("MTN281#*")
        spyOn(store, 'select').and.returnValue(of(false))
        spyOn(router, 'navigateByUrl')
        component.login();
        expect(router.navigateByUrl).not.toHaveBeenCalledWith('/dashboard')
      }))
  })
});


