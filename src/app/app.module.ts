import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './ServerComponent/server.component';
import { SliderBackgroundComponent } from './core/slider-background/slider-background.component'
// import { bootstrap } from 'node_modules/bootstrap/dist/css/'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SliderBackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // bootstrap
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
