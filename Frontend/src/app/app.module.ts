import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { GetstartedComponent } from './components/getstarted/getstarted.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RequestPasswordComponent } from './components/request-password/request-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RegistrationWelcomeComponent } from './components/registration-welcome/registration-welcome.component';
import { SurveyComponent } from './components/survey/survey.component';
import { LearnbonusComponent } from './components/learnbonus/learnbonus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    GetstartedComponent,
    ResetPasswordComponent,
    ProfileComponent,
    CarouselComponent,
    RequestPasswordComponent,
    DashboardComponent,
    NavbarComponent,
    RegistrationWelcomeComponent,
    SurveyComponent,
    LearnbonusComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
