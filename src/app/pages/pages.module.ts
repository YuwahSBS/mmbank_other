import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DepositComponent } from './deposit/deposit.component';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PersonalLoanComponent } from './personal-loan/personal-loan.component';
import { InnerFooterComponent } from 'app/components/inner-footer/inner-footer.component';
import { PageLoanComponent } from './page-loan/page-loan.component';
import { PageDepositComponent } from './page-deposit/page-deposit.component';
import { PersonalSmeComponent } from './personal-sme/personal-sme.component';
import { LoadingComponent } from 'app/shared/loading/loading.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { SecureTermComponent } from './loan/secure-term/secure-term.component';


@NgModule({
  declarations: [
    MainComponent,
    TestComponent,
    DepositComponent,
    NavbarComponent,
    PersonalLoanComponent,
    InnerFooterComponent,
    PageLoanComponent,
    PageDepositComponent,
    PersonalSmeComponent,
    LoadingComponent,
    ComingSoonComponent,
    SecureTermComponent
  ],
  imports: [
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgbModule,
    TranslateModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA1augnlWzSvQ4d0uGnvLpQqdg7rnlAd5w',
      libraries: ['places']
    })
  ],
  exports: [
    TranslateModule
  ]
})
export class PagesModule { }
