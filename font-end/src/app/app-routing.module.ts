import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Board } from './components/board/board.component';
import { Signin } from './components/signin/signin.component';
import { EditActivity } from './components/editActicitySticker/editActivity.component';

const routes: Routes = [
  { path: 'board', component: Board },
  { path: 'edit_activity_sticker', component: EditActivity },
  { path: 'signin', component: Signin },
  { path: '**', redirectTo: '/board' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
