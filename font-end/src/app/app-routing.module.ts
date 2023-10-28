import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Board } from './components/board/board.component';
import { Signin } from './components/signin/signin.component';
import { HowtouseComponent } from './components/howtouse/howtouse.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditActivity } from './components/editActicitySticker/editActivity.component';


const routes: Routes = [
  { path: 'board', component: Board },
  { path: 'edit_activity_sticker', component: EditActivity },
  { path: 'signin', component: Signin },
  { path: 'howto', component: HowtouseComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: 'profile' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
