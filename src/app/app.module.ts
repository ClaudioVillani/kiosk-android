import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RedirectPageComponent } from './pages/redirect-page/redirect-page/redirect-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RedirectPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
