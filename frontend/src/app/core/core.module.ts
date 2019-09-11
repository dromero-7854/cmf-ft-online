import { NgModule, Optional, SkipSelf } from '@angular/core';
// modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// interceptors
import { JwtTokenInterceptor } from './interceptors/jwt.token.interceptor';
// services
import { TranslationService } from './services/translate.service';
// layouts
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
// components
import { LoginComponent } from './components/login/login.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    LoginComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    NgxWebstorageModule.forRoot(),
    TranslateModule.forRoot(),
    SharedModule,
    HttpClientModule
  ],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtTokenInterceptor,
      multi: true
    }
  ],
})
export class CoreModule {

  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
    private translate: TranslationService
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
    translate.init();
  }

}