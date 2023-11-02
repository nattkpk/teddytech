import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Board } from './components/board/board.component';
import { Signin } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { HowtouseComponent } from './components/howtouse/howtouse.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CheckProfileComponent} from './components/check-profile/check-profile.component';
import { EditActivity } from './components/editActicitySticker/editActivity.component';
import { EditReward } from './components/editRewardSticker/editReward.component';
import { EditFeeling } from './components/editFeelingSticker/editFeeling.component';
import { EditPraise } from './components/editPraiseSticker/editPraise.component';
import { EditPoint } from './components/editPointSticker/editPoint.component';
import { History } from './components/history/history.component';
import { SaveBoard } from './components/saveBoard/saveBoard.component';
import { HistoryBoard } from './components/historyBoard/historyBoard.component';
import {ProfileService} from './services/auth-user.service';



const routes: Routes = [
  { path: 'board', component: Board },
  { path: 'edit_activity_sticker', component: EditActivity },
  { path: 'edit_reward_sticker', component: EditReward },
  { path: 'edit_feeling_sticker', component: EditFeeling },
  { path: 'edit_praise_sticker', component: EditPraise },
  { path: 'edit_point_sticker', component: EditPoint },
  { path: 'signin', component: Signin },
  { path: 'howto', component: HowtouseComponent },
  { path: 'profile', component: CheckProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'save_board', component: SaveBoard },
  { path: 'history', component: History },
  { path: 'history_board', component: HistoryBoard },
  { path: '**', redirectTo: '/board' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProfileService],
})
export class AppRoutingModule { }
