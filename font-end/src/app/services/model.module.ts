import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiData } from './apidata.service';

@NgModule({
  imports: [ HttpClientModule],
  providers: [
    ApiData,
    { provide: ApiData }
  ],
})

export class ServiceModule {
    
}