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

    this.rewardTheme = [
      { bg: '../../../assets/img/BgSticker/wow1.png', font: '#775189' },
      { bg: '../../../assets/img/BgSticker/wow2.png', font: '#678CA2' },
      { bg: '../../../assets/img/BgSticker/wow3.png', font: '#444C96' },
      { bg: '../../../assets/img/BgSticker/wow4.png', font: '#3F5236' },
      { bg: '../../../assets/img/BgSticker/wow5.png', font: '#8F834F' },
      { bg: '../../../assets/img/BgSticker/wow6.png', font: '#A46F4F' },
      { bg: '../../../assets/img/BgSticker/wow7.png', font: '#AF5E5E' },
      { bg: '../../../assets/img/BgSticker/wow8.png', font: '#AF5771' },
      { bg: '../../../assets/img/BgSticker/wow9.png', font: '#645232' },
    ];

    this.rewardIcon = [
      '../../../assets/img/RewardIcon/book.png',
      '../../../assets/img/RewardIcon/cotton-candy.png',
      '../../../assets/img/RewardIcon/ice-cream1.png',
      '../../../assets/img/RewardIcon/pencil-case.png',
      '../../../assets/img/RewardIcon/storage-box.png',
      '../../../assets/img/RewardIcon/teddy-bear.png',
    ];
  }

  activityIcon: any[];
  activityTheme: any[];


  selectedThemeActivity = -1;

  setActivitySticker(select: number) {
    this.selectedThemeActivity = select;
    console.log('set Theme complete!');
  }

  getActivityTheme(){
    const themeA = {activityTheme : this.activityTheme[this.selectedThemeActivity]};
    return themeA;
  }

  getAllActivityTheme() {
    return this.activityTheme;
  }

  getAllActivityIcon() {
    return this.activityIcon;
  }

  // -------------------------------Reward---------------------------------------

  rewardIcon: any[];
  rewardTheme: any[];


  selectedThemereward = -1;

  setrewardSticker(select: number) {
    this.selectedThemereward = select;
    console.log('set Theme complete!');
  }

  getrewardTheme(){
    const themeA = {rewardTheme : this.rewardTheme[this.selectedThemereward]};
    return themeA;
  }

  getAllrewardTheme() {
    return this.rewardTheme;
  }

  getAllrewardIcon() {
    return this.rewardIcon;
  }

}
