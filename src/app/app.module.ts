import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {NgrxActionsModule} from 'ngrx-actions/dist';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // StoreModule.forRoot(),
    // NgrxActionsModule,
    // EffectsModule.forRoot([]),
    // StoreRouterConnectingModule,
    // !environment.production ? StoreDevtoolsModule.instrument() : []

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
