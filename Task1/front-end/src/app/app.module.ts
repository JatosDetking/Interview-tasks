import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ServicesComponent } from './components/services/services.component';
import { EventsComponent } from './components/events/events.component';
import { MaterialModule } from './modules/material/material.modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenIInterceptorService } from './token-iinterceptor.service';
import { LoggedInGuardService } from './guards/logged-in.guard.service';
import { LoggedOutGuardService } from './guards/logged-out.guard.service';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreateEditServiceComponent } from './dialogs/create-edit-service/create-edit-service.component';
import { ViewServiceComponent } from './dialogs/view-service/view-service.component';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenIInterceptorService, multi: true },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuBarComponent,
    ServicesComponent,
    EventsComponent,
    CreateEditServiceComponent,
    ViewServiceComponent,
  ],
  imports: [
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    httpInterceptorProviders,
    {provide : LocationStrategy , useClass: HashLocationStrategy},
    LoggedInGuardService,
    LoggedOutGuardService,
    {provide: MAT_DATE_LOCALE, useValue: 'bg-BG'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
