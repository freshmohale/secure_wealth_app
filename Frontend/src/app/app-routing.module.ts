import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GetstartedComponent } from './components/getstarted/getstarted.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrationWelcomeComponent } from './components/registration-welcome/registration-welcome.component';
import { SurveyComponent } from './components/survey/survey.component';
import { LearnbonusComponent } from './components/learnbonus/learnbonus.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'getstarted', component: GetstartedComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'welcome', component: RegistrationWelcomeComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'learn', component: LearnbonusComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
