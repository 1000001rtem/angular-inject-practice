import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OneModule} from './one/one.module';
import {TargetService} from './target.service';
import {RootService} from './root.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OneModule
  ],
  providers: [
    {provide: RootService, useFactory: () => new RootService('root module')},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    console.log('App module injector:');
    console.log(injector);
    console.log(injector.get(TargetService).title);
  }
}

