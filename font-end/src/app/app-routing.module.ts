import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Board} from './components/board/board.component'
import { EditActivity } from './components/editActicitySticker/editActivity.component';
import { EditReward } from './components/editRewardSticker/editReward.component';
import { EditFeeling } from './components/editFeelingSticker/editFeeling.component';

const routes: Routes = [
  { path: 'board', component: Board },
  { path: 'edit_activity_sticker', component: EditActivity },
  { path: 'edit_reward_sticker', component: EditReward },
  { path: 'edit_feeling_sticker', component: EditFeeling },
  { path: '**', redirectTo: '/edit_feeling_sticker' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }