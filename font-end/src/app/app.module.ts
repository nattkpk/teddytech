import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ModelModule } from './models/userModel/model.module';
import { Signin } from './components/signin/signin.component';
import {Board} from './components/board/board.component'
import { EditActivity } from './components/editActicitySticker/editActivity.component';
import { FormsModule } from '@angular/forms';
import { EditReward } from './components/editRewardSticker/editReward.component';
import { EditFeeling } from './components/editFeelingSticker/editFeeling.component';
import { EditPraise } from './components/editPraiseSticker/editPraise.component';
import { EditPoint } from './components/editPointSticker/editPoint.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceModule } from './services/model.module';
import { HowtouseComponent } from './components/howtouse/howtouse.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

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
    EditProfileComponent
  ],
  imports: [
    FormsModule,
    ServiceModule,
    ModelModule,
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
