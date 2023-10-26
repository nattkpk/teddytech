import { Injectable } from '@angular/core';
import { UserDataService } from './user-data.service';
import { UserRepository } from '../models/userModel/user.repository';

@Injectable({
  providedIn: 'root',
})
export class StickerDataService {
  
    constructor(){
      this.activityBg = '../../../assets/img/BgSticker/Diamon4.png';
      this.activityFontColor = '#5E7255';
    }

    activityBg: string;
    activityFontColor: string;

    setActivitySticker(bg: string,font:string) {
      this.activityBg = bg;
      this.activityFontColor = font;
      console.log("set!");
    }
  
    getActivityBg(): string {
      return this.activityBg
    }

    getActivityFontColor(): string {
      return this.activityFontColor
    }
    
    

}
