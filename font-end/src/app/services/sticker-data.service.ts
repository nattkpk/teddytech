import { Injectable } from '@angular/core';
import { UserDataService } from './user-data.service';
import { UserRepository } from '../models/userModel/user.repository';

@Injectable({
  providedIn: 'root',
})
export class StickerDataService {
  constructor() {
    this.activityTheme = [
      { bg: '../../../assets/img/BgSticker/Diamon1.png', font: '#775189' },
      { bg: '../../../assets/img/BgSticker/Diamon2.png', font: '#678CA2' },
      { bg: '../../../assets/img/BgSticker/Diamon3.png', font: '#444C96' },
      { bg: '../../../assets/img/BgSticker/Diamon4.png', font: '#3F5236' },
      { bg: '../../../assets/img/BgSticker/Diamon5.png', font: '#8F834F' },
      { bg: '../../../assets/img/BgSticker/Diamon6.png', font: '#A46F4F' },
      { bg: '../../../assets/img/BgSticker/Diamon7.png', font: '#AF5E5E' },
      { bg: '../../../assets/img/BgSticker/Diamon8.png', font: '#AF5771' },
      { bg: '../../../assets/img/BgSticker/Diamon9.png', font: '#645232' },
    ];
    this.activityIcon = [
      '../../../assets/img/ActivityIcon/shower.png',
      '../../../assets/img/ActivityIcon/clock.png',
      '../../../assets/img/ActivityIcon/wash-your-hands.png',
      '../../../assets/img/ActivityIcon/tooth-brush.png',
      '../../../assets/img/ActivityIcon/make-the-bed.png',
      '../../../assets/img/ActivityIcon/milk-box.png',
      '../../../assets/img/ActivityIcon/sleeping.png'
    ];
  }

  activityIcon: any[];
  activityTheme: any[];

  selectedThemeActivity = 3;

  setActivitySticker(select: number) {
    this.selectedThemeActivity = select;
    console.log('set Theme complete!');
  }

  getActivityBg(): string {
    return this.activityTheme[this.selectedThemeActivity].bg;
  }

  getActivityFontColor(): string {
    return this.activityTheme[this.selectedThemeActivity].font;
  }

  getAllActivityTheme() {
    return this.activityTheme;
  }

  getAllActivityIcon() {
    return this.activityIcon;
  }

}
