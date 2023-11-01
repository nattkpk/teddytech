//module
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ModelModule } from './models/userModel/model.module';
import { AppRoutingModule } from './app-routing.module';
import { ServiceModule } from './services/model.module';
//component
import { AppComponent } from './app.component';
import {Board} from './components/board/board.component'
import { Signin } from './components/signin/signin.component';
import { EditActivity } from './components/editActicitySticker/editActivity.component';
import { EditReward } from './components/editRewardSticker/editReward.component';
import { EditFeeling } from './components/editFeelingSticker/editFeeling.component';
import { EditPraise } from './components/editPraiseSticker/editPraise.component';
import { EditPoint } from './components/editPointSticker/editPoint.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HowtouseComponent } from './components/howtouse/howtouse.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { History } from './components/history/history.component';
import { SaveBoard } from './components/saveBoard/saveBoard.component';
import { HistoryBoard } from './components/historyBoard/historyBoard.component';
// material
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CheckProfileComponent } from './components/check-profile/check-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    Board,
    Signin,
    EditActivity,
    EditReward ,
    EditFeeling ,
    EditPraise,
    EditPoint,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HowtouseComponent,
    ProfileComponent,
    EditProfileComponent,
    SaveBoard,
    History,
    HistoryBoard,
    CheckProfileComponent,
  ],
  imports: [
    FormsModule,
    ServiceModule,
    ModelModule,
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
