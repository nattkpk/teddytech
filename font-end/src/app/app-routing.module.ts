import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Board} from './components/board/board.component'
import { EditActivity } from './components/editActicitySticker/editActivity.component';
import { EditReward } from './components/editRewardSticker/editReward.component';
import { EditFeeling } from './components/editFeelingSticker/editFeeling.component';
import { EditPraise } from './components/editPraiseSticker/editPraise.component';
import { EditPoint } from './components/editPointSticker/editPoint.component';
import { History } from './components/history/history.component';
import { SaveBoard } from './components/saveBoard/saveBoard.component';
import { HistoryBoard } from './components/historyBoard/historyBoard.component';

const routes: Routes = [
  { path: 'board', component: Board },
  { path: 'edit_activity_sticker', component: EditActivity },
  { path: 'edit_reward_sticker', component: EditReward },
  { path: 'edit_feeling_sticker', component: EditFeeling },
  { path: 'edit_praise_sticker', component: EditPraise },
  { path: 'edit_point_sticker', component: EditPoint },
  { path: 'save_board', component: SaveBoard },
  { path: 'history', component: History },
  { path: 'history_board', component: HistoryBoard },
  { path: '**', redirectTo: '/board' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }