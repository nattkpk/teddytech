import { Injectable } from '@angular/core';
import { UserDataService } from './user-data.service';
import { UserRepository } from '../models/userModel/user.repository';

@Injectable({
  providedIn: 'root',
})
export class StickerDataService {
  
    constructor(
        private service: UserDataService,
        private repository: UserRepository,
        ){}
    
    

}
