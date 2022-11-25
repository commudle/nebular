import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule } from '@commudle/theme';
import { NbAuthModule } from '@commudle/auth';
import { NbSecurityModule } from '@commudle/security';
import { NbMomentDateModule } from '@commudle/moment';
import { NbDateFnsDateModule } from '@commudle/date-fns';
import { NbEvaIconsModule } from '@commudle/eva-icons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'packages-smoke' }),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbAuthModule.forRoot(),
    NbSecurityModule.forRoot(),
    NbMomentDateModule,
    NbDateFnsDateModule,
    NbEvaIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
