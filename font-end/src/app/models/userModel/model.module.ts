import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserRepository } from './user.repository';


@NgModule({
  imports: [ HttpClientModule],
  providers: [
    UserRepository,
  ],
})

export class ModelModule {
    
}