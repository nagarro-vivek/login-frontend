import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let store: MockStore;
  const initialState = { isAuthenticated: false };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ DashboardComponent ],
      providers: [
        provideMockStore({ initialState }),
        // other providers
      ],
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('logout', inject([Router],(router: Router) => {
    spyOn(router, 'navigateByUrl')
    component.logout();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/login')
  }))

  it('logout', inject([Router],(router: Router) => {
    spyOn(router, 'navigateByUrl')
    spyOn(store, 'dispatch')
    component.logout();
    expect(store.dispatch).toHaveBeenCalled()
  }))
});
