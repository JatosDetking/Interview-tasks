import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ServicesComponent } from './components/services/services.component';
import { LoggedInGuardService } from './guards/logged-in.guard.service';
import { LoggedOutGuardService } from './guards/logged-out.guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate:[LoggedOutGuardService] },
  { path: 'login', component: LoginComponent, canActivate:[LoggedOutGuardService] },
  { path: 'register', component: RegisterComponent, canActivate:[LoggedOutGuardService] },
  { path: 'services', component: ServicesComponent, canActivate:[LoggedInGuardService] },
  { path: 'events', component: EventsComponent, canActivate:[LoggedInGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
