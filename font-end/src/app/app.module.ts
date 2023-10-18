import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {Board} from './components/board/board.component'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Signin } from './components/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    Board,
    Signin
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
