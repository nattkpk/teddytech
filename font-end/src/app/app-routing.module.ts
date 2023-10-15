import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Board} from './components/board/board.component'

const routes: Routes = [
  { path: '', component: Board },
  { path: 'board', component: Board },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }