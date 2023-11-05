import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserRepository } from './user.repository';
import { PackUser } from './user.packUser';


@NgModule({
  imports: [ HttpClientModule],
  providers: [
    UserRepository,
    PackUser
  ],
})

export class ModelModule {
    
}