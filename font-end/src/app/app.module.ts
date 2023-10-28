import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {Board} from './components/board/board.component'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ModelModule } from './models/userModel/model.module';
import { EditActivity } from './components/editActicitySticker/editActivity.component';
import { ServiceModule } from './services/model.module';

@NgModule({
  declarations: [
    AppComponent,
    Board,
    EditActivity,
  ],
  imports: [
    ServiceModule,
    ModelModule,
    BrowserModule,
    DragDropModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
