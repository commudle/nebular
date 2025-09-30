import { NgModule } from '@angular/core';
import { BrowserModule, REMOVE_STYLES_ON_COMPONENT_DESTROY } from '@angular/platform-browser';

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
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbAuthModule.forRoot(),
    NbSecurityModule.forRoot(),
    NbMomentDateModule,
    NbDateFnsDateModule,
    NbEvaIconsModule,
  ],
  providers: [
    {
      provide: REMOVE_STYLES_ON_COMPONENT_DESTROY,
      useValue: false,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
