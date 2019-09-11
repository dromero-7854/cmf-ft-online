import { NgModule } from '@angular/core';
// routing
import { AppRoutingModule } from './app-routing.module';
// modules
import { CoreModule } from './core/core.module';
// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }