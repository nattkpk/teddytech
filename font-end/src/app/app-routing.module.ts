import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Board} from './components/board/board.component'
import { EditActivity } from './components/editActicitySticker/editActivity.component';

const routes: Routes = [
  { path: 'board', component: Board },
  { path: 'edit_activity_sticker', component: EditActivity },
  { path: '**', redirectTo: '/edit_activity_sticker' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }