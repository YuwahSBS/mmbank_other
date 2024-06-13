import { DepositComponent } from './pages/deposit/deposit.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { MainComponent } from './pages/main/main.component';
import { TestComponent } from './pages/test/test.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PersonalLoanComponent } from './pages/personal-loan/personal-loan.component';
import { PageLoanComponent } from './pages/page-loan/page-loan.component';
import { PageDepositComponent } from './pages/page-deposit/page-deposit.component';
import { PersonalSmeComponent } from './pages/personal-sme/personal-sme.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { SecureTermComponent } from './pages/loan/secure-term/secure-term.component';

const routes: Routes =[
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'home',             component: MainComponent },
    { path: 'components',       component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'test',      component: TestComponent },
    { path: 'personal', component: PersonalLoanComponent },
    { path: 'sme', component: PersonalSmeComponent },
    { path: 'loan', component: PageLoanComponent },
    { path: 'deposit', component: PageDepositComponent },
    { path: 'loading', component: LoadingComponent },
    { path: 'comingsoon', component: ComingSoonComponent },
    { path: 'secure-term-loan', component: SecureTermComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
})
export class AppRoutingModule { }
