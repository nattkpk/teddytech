import { Injectable } from '@angular/core';
import { UserDataService } from './user-data.service';
import { UserRepository } from '../models/userModel/user.repository';

@Injectable({
  providedIn: 'root',
})
export class StickerDataService {
  constructor() {
    //--------------------------- activity----------------------------
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
    //--------------------------- Praise----------------------------
    this.praiseTheme = [
      { bg: '../../../assets/img/BgSticker/Heart1.png', font: '#775189' },
      { bg: '../../../assets/img/BgSticker/Heart2.png', font: '#678CA2' },
      { bg: '../../../assets/img/BgSticker/Heart3.png', font: '#444C96' },
      { bg: '../../../assets/img/BgSticker/Heart4.png', font: '#3F5236' },
      { bg: '../../../assets/img/BgSticker/Heart5.png', font: '#8F834F' },
      { bg: '../../../assets/img/BgSticker/Heart6.png', font: '#A46F4F' },
      { bg: '../../../assets/img/BgSticker/Heart7.png', font: '#AF5E5E' },
      { bg: '../../../assets/img/BgSticker/Heart8.png', font: '#AF5771' },
      { bg: '../../../assets/img/BgSticker/Heart9.png', font: '#645232' },
    ];
    //--------------------------- feeling----------------------------
    this.feelingTheme = [
      { bg: '../../../assets/img/BgSticker/Star1.png', font: '#775189' },
      { bg: '../../../assets/img/BgSticker/Star2.png', font: '#678CA2' },
      { bg: '../../../assets/img/BgSticker/Star3.png', font: '#444C96' },
      { bg: '../../../assets/img/BgSticker/Star4.png', font: '#3F5236' },
      { bg: '../../../assets/img/BgSticker/Star5.png', font: '#8F834F' },
      { bg: '../../../assets/img/BgSticker/Star6.png', font: '#A46F4F' },
      { bg: '../../../assets/img/BgSticker/Star7.png', font: '#AF5E5E' },
      { bg: '../../../assets/img/BgSticker/Star8.png', font: '#AF5771' },
      { bg: '../../../assets/img/BgSticker/Star9.png', font: '#645232' },
    ];

    //--------------------------- Point----------------------------
    this.pointBg = [
      '../../../assets/img/PointSticker/Bg/Bgpoint1.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint2.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint3.png',

      '../../../assets/img/PointSticker/Bg/Bgpoint1.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint2.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint3.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint1.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint2.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint3.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint1.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint2.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint3.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint1.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint2.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint3.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint1.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint2.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint3.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint1.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint2.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint3.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint1.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint2.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint3.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint1.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint2.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint3.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint1.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint2.png',
      '../../../assets/img/PointSticker/Bg/Bgpoint3.png',
    ];
    this.pointIcon = [
      '../../../assets/img/PointSticker/Icon/heart.png',
      '../../../assets/img/PointSticker/Icon/shooting-star.png',
      '../../../assets/img/PointSticker/Icon/star.png',

      '../../../assets/img/PointSticker/Icon/heart.png',
      '../../../assets/img/PointSticker/Icon/shooting-star.png',
      '../../../assets/img/PointSticker/Icon/star.png',
      '../../../assets/img/PointSticker/Icon/heart.png',
      '../../../assets/img/PointSticker/Icon/shooting-star.png',
      '../../../assets/img/PointSticker/Icon/star.png',
      '../../../assets/img/PointSticker/Icon/heart.png',
      '../../../assets/img/PointSticker/Icon/shooting-star.png',
      '../../../assets/img/PointSticker/Icon/star.png',
      '../../../assets/img/PointSticker/Icon/heart.png',
      '../../../assets/img/PointSticker/Icon/shooting-star.png',
      '../../../assets/img/PointSticker/Icon/star.png',
      '../../../assets/img/PointSticker/Icon/heart.png',
      '../../../assets/img/PointSticker/Icon/shooting-star.png',
      '../../../assets/img/PointSticker/Icon/star.png',
      '../../../assets/img/PointSticker/Icon/heart.png',
      '../../../assets/img/PointSticker/Icon/shooting-star.png',
      '../../../assets/img/PointSticker/Icon/star.png',
      '../../../assets/img/PointSticker/Icon/heart.png',
      '../../../assets/img/PointSticker/Icon/shooting-star.png',
      '../../../assets/img/PointSticker/Icon/star.png',
      '../../../assets/img/PointSticker/Icon/heart.png',
      '../../../assets/img/PointSticker/Icon/shooting-star.png',
      '../../../assets/img/PointSticker/Icon/star.png',
      '../../../assets/img/PointSticker/Icon/heart.png',
      '../../../assets/img/PointSticker/Icon/shooting-star.png',
      '../../../assets/img/PointSticker/Icon/star.png',
    ];
    //--------------------------- reward----------------------------

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

    // ---------------------------------- Praise -----------------------------------------
    praiseTheme: any[];


    selectedThemepraise = -1;
  
    setpraiseSticker(select: number) {
      this.selectedThemepraise = select;
      console.log('set Theme complete!');
    }
  
    getpraiseTheme(){
      const themeA = {praiseTheme : this.praiseTheme[this.selectedThemepraise]};
      return themeA;
    }
  
    getAllpraiseTheme() {
      return this.praiseTheme;
    }

  // ---------------------------------- Feeling -----------------------------------------
  feelingTheme: any[];


  selectedThemefeeling = -1;

  setfeelingSticker(select: number) {
    this.selectedThemefeeling = select;
    console.log('set Theme complete!');
  }

  getfeelingTheme(){
    const themeA = {feelingTheme : this.feelingTheme[this.selectedThemefeeling]};
    return themeA;
  }

  getAllfeelingTheme() {
    return this.feelingTheme;
  }

  // --------------------------------- Point --------------------------------------------
  pointIcon: any[];
  pointBg: any[];

  getAllPointBg() {
    return this.pointBg;
  }

  getAllPointIcon() {
    return this.pointIcon;
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
