import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }