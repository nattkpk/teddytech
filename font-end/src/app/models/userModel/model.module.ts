import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { userStaticData } from './user_static_data';
import { UserRepository } from './user.repository';


@NgModule({
  imports: [ HttpClientModule],
  providers: [
    UserRepository,
    userStaticData,
    { provide: userStaticData }
  ],
})

export class ModelModule {
    
}