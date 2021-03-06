import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { TeamGridComponent } from './team-grid/team-grid.component';
import { HomeComponent } from './home/home.component';

import {ShareButtonsModule} from 'ng2-sharebuttons';

@NgModule({
  declarations: [
    AppComponent,
    TeamGridComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    ShareButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
