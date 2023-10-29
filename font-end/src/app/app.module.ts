import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {Board} from './components/board/board.component'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ModelModule } from './models/userModel/model.module';
import { EditActivity } from './components/editActicitySticker/editActivity.component';
import { ServiceModule } from './services/model.module';
import { FormsModule } from '@angular/forms';
import { EditReward } from './components/editRewardSticker/editReward.component';
import { EditFeeling } from './components/editFeelingSticker/editFeeling.component';
import { EditPraise } from './components/editPraiseSticker/editPraise.component';

@NgModule({
  declarations: [
    AppComponent,
    Board,
    EditActivity,
    EditReward ,
    EditFeeling ,
    EditPraise
  ],
  imports: [
    FormsModule,
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
