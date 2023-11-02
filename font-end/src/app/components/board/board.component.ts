import {
  CdkDragDrop,
  CdkDragStart,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Injectable } from '@angular/core';
import { User } from 'src/app/models/userModel/user.model';
import { UserRepository } from 'src/app/models/userModel/user.repository';
import { UserDataService } from 'src/app/services/user-data.service';
import { Router } from '@angular/router';
import { StickerDataService } from 'src/app/services/sticker-data.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class Board {
  selectedgenre: string = 'Activity';
  addBg = '';
  itemsPerPage: number = 15;
  currentPage: number = 1;

  activityData: any[] = [];
  praise_data: any[] = [];
  feelingData: any[] = [];
  pointData: any[] = [];
  rewardData: any[] = [];
  user: any | null = {};
  guest: boolean = true;
  id: string = '';

  constructor(
    private router: Router,
    private user_repository: UserRepository,
    private userDataService: UserDataService,
    private sticker_service: StickerDataService
  ) {}

  ngOnInit() {
    this.id = this.userDataService.getUserId();

    this.user_repository
      .getUserById(this.userDataService.getUserId())
      .subscribe((user) => {
        console.log('User Data:', user);
        this.user = user;

        this.activityData = this.user?.stickers?.activity
          ? this.user.stickers.activity
          : [];
        this.activityBg = this.user.activityTheme.bg;
        this.activity_fontColor = this.user.activityTheme.font;

        this.praise_data = this.user?.stickers?.praise
          ? this.user.stickers.praise
          : [];
        this.praiseBg = this.user.praiseTheme.bg;
        this.praise_fontColor = this.user.praiseTheme.font;

        this.feelingData = this.user?.stickers?.feeling
          ? this.user.stickers.feeling
          : [];
        this.feelingBg = this.user.feelingTheme.bg;
        this.feeling_fontColor = this.user.feelingTheme.font;

        this.pointData = this.user?.stickers?.point
          ? this.user.stickers.point
          : [];

        this.rewardData = this.user?.stickers?.reward
          ? this.user.stickers.reward
          : [];
        this.rewardBg = this.user.rewardTheme.bg;
        this.reward_fontColor = this.user.rewardTheme.font;

        this.activity_sticked = this.user.activitySticked;
        this.sun_sticked = this.user.sunSticked;
        this.mon_sticked = this.user.monSticked;
        this.tue_sticked = this.user.tueSticked;
        this.wed_sticked = this.user.wedSticked;
        this.thu_sticked = this.user.thuSticked;
        this.fri_sticked = this.user.friSticked;
        this.sat_sticked = this.user.satSticked;
        this.feeling_sticked = this.user.feelingSticked;
        this.reward_sticked = this.user.rewardSticked;
        this.praise_sticked = this.user.praiseSticked;

        this.pointA = this.user.pointA;
        this.pointB = this.user.pointB;
        this.now_points = this.user.currentPoint;
      });

    if (this.id != undefined) {
      this.guest = false;
    }
    if (this.guest) {
      this.guestData();
    }
    console.log('Guest : ', this.guest);
  }
  // ---------------------------------For guest-----------------------------------------

  guestData() {
    this.activity_sticked = [
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
    ];
    this.sun_sticked = [
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
    ];
    this.mon_sticked = [
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
    ];
    this.tue_sticked = [
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
    ];
    this.wed_sticked = [
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
    ];
    this.thu_sticked = [
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
    ];
    this.fri_sticked = [
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
    ];
    this.sat_sticked = [
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
    ];
    this.praise_sticked = [{ text: '' }, { text: '' }, { text: '' }];
    this.feeling_sticked = [{ text: '' }, { text: '' }, { text: '' }];
    this.reward_sticked = [{ text: '' }, { text: '' }];

    this.activityData = [
      {
        text: 'Take a Shower',
        imageUrl: '../../../assets/img/ActivityIcon/shower.png',
      },
      {
        text: 'Wake up on time',
        imageUrl: '../../../assets/img/ActivityIcon/clock.png',
      },
      {
        text: 'Wash hands',
        imageUrl: '../../../assets/img/ActivityIcon/wash-your-hands.png',
      },
      {
        text: 'Brush teeth',
        imageUrl: '../../../assets/img/ActivityIcon/tooth-brush.png',
      },
      {
        text: 'Make the bed',
        imageUrl: '../../../assets/img/ActivityIcon/make-the-bed.png',
      },
      {
        text: 'Drink milk',
        imageUrl: '../../../assets/img/ActivityIcon/milk-box.png',
      },
    ];
    this.activityBg = '../../../assets/img/BgSticker/Diamon4.png';
    this.activity_fontColor = '#3F5236';

    this.praise_data = [
      { text: "You're Amazing!" },
      { text: "I'm so proud of you" },
      { text: 'You did a fantastic job!' },
      { text: 'Thank you for your help' },
      { text: 'I love you' },
      { text: 'You amaze me every day' },
    ];
    this.praiseBg = '../../../assets/img/BgSticker/Heart8.png';
    this.praise_fontColor = '#AF5771';

    this.feelingData = [
      { text: 'Good !' },
      { text: 'Amazing !' },
      { text: 'Bored' },
      { text: 'Happy' },
      { text: 'Sleepy' },
      { text: 'Joyful' },
    ];
    this.feelingBg = '../../../assets/img/BgSticker/Star5.png';
    this.feeling_fontColor = '#8F834F';

    this.pointData = [
      {
        icon: '../../../assets/img/PointSticker/Icon/heart.png',
        bgImage: '../../../assets/img/PointSticker/Bg/Bgpoint1.png',
        point: 1,
      },
      {
        icon: '../../../assets/img/PointSticker/Icon/star.png',
        bgImage: '../../../assets/img/PointSticker/Bg/Bgpoint2.png',
        point: 2,
      },
      {
        icon: '../../../assets/img/PointSticker/Icon/shooting-star.png',
        bgImage: '../../../assets/img/PointSticker/Bg/Bgpoint3.png',
        point: 3,
      },
    ];

    this.rewardData = [
      {
        text: 'Teddy doll',
        imageUrl: '../../../assets/img/RewardIcon/teddy-bear.png',
      },
      { text: 'New book', imageUrl: '../../../assets/img/RewardIcon/book.png' },
      {
        text: 'Cotton candy',
        imageUrl: '../../../assets/img/RewardIcon/cotton-candy.png',
      },
      {
        text: 'Ice cream',
        imageUrl: '../../../assets/img/RewardIcon/ice-cream1.png',
      },
      {
        text: 'New Pencil',
        imageUrl: '../../../assets/img/RewardIcon/pencil-case.png',
      },
      {
        text: 'New Toy',
        imageUrl: '../../../assets/img/RewardIcon/storage-box.png',
      },
    ];

    this.rewardBg = '../../../assets/img/BgSticker/wow2.png';
    this.reward_fontColor = '#678CA2';
  }
  // ------------------------------------------------------------

  dropSticker(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log(event.previousContainer);
    if (!this.guest) {
      if (event.previousContainer.data == this.activity_sticked) {
        this.updateActivityData();
      } else if (event.previousContainer.data == this.sun_sticked) {
        this.updateSunData();
      } else if (event.previousContainer.data == this.mon_sticked) {
        this.updateMonData();
      } else if (event.previousContainer.data == this.tue_sticked) {
        this.updateTueData();
      } else if (event.previousContainer.data == this.wed_sticked) {
        this.updateWednData();
      } else if (event.previousContainer.data == this.thu_sticked) {
        this.updateThuData();
      } else if (event.previousContainer.data == this.fri_sticked) {
        this.updateFriData();
      } else if (event.previousContainer.data == this.sat_sticked) {
        this.updateSatData();
      } else if (event.previousContainer.data == this.praise_sticked) {
        this.updatepraiseData();
      } else if (event.previousContainer.data == this.feeling_sticked) {
        this.updatefeelingData();
      } else if (event.previousContainer.data == this.reward_sticked) {
        this.updaterewardData();
      } else {
        this.updatePosition();
      }
    }
  }

  changePage(offset: number): void {
    this.currentPage += offset;
  }

  updatePosition() {
    const updatedUserData = {
      stickers: {
        activity: this.activityData,
        praise: this.praise_data,
        feeling: this.feelingData,
        point: this.pointData,
        reward: this.rewardData,
      },
    };
    this.user_repository.updateUserFields(
      this.userDataService.getUserId(),
      updatedUserData
    );
  }

  // goToEditActivity() {
  //   this.router.navigate(['/edit_activity_sticker']);
  // }

  // ---------------------------- Activity Sticker -------------------------------------

  activityBg = '';
  activity_fontColor = '';
  activity_sticked: any[] = [];

  updateActivityData() {
    const updatedUserData = {
      activitySticked: this.activity_sticked,
    };
    this.user_repository.updateUserFields(
      this.userDataService.getUserId(),
      updatedUserData
    );
  }

  getActivityDataForPage(page: number): any[] {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.activityData.slice(startIndex, endIndex);
  }

  get totalNumberOfActivityPages(): number {
    return Math.ceil(this.activityData.length / this.itemsPerPage);
  }

  addActivity(index: number) {
    const stickerIndex = index + (this.currentPage - 1) * this.itemsPerPage;
    for (let i = 0; i < this.activity_sticked.length; i++) {
      if (!this.activity_sticked[i].imageUrl) {
        this.activity_sticked[i] = {
          text: this.activityData[stickerIndex].text,
          imageUrl: this.activityData[stickerIndex].imageUrl,
        };
        if (!this.guest) {
          this.updateActivityData();
        }

        break;
      }
    }
  }

  deleteActivity(index: number): void {
    if (index >= 0 && index < this.activity_sticked.length) {
      this.activity_sticked[index] = { text: '' };
    }
    if (!this.guest) {
      this.updateActivityData();
    }
  }

  // --------------------------------Point Sticker---------------------------------------------

  getPointDataForPage(page: number): any[] {
    const startIndex = (page - 1) * 12;
    const endIndex = startIndex + 12;
    return this.pointData.slice(startIndex, endIndex);
  }

  get totalNumberOfPointPages(): number {
    return Math.ceil(this.pointData.length / 12);
  }

  updateSunData() {
    const updatedUserData = {
      sunSticked: this.sun_sticked,
      currentPoint: this.now_points,
    };
    this.user_repository.updateUserFields(
      this.userDataService.getUserId(),
      updatedUserData
    );
  }
  updateMonData() {
    const updatedUserData = {
      monSticked: this.mon_sticked,
      currentPoint: this.now_points,
    };
    this.user_repository.updateUserFields(
      this.userDataService.getUserId(),
      updatedUserData
    );
  }
  updateTueData() {
    const updatedUserData = {
      tueSticked: this.tue_sticked,
      currentPoint: this.now_points,
    };
    this.user_repository.updateUserFields(
      this.userDataService.getUserId(),
      updatedUserData
    );
  }
  updateWednData() {
    const updatedUserData = {
      wedSticked: this.wed_sticked,
      currentPoint: this.now_points,
    };
    this.user_repository.updateUserFields(
      this.userDataService.getUserId(),
      updatedUserData
    );
  }
  updateThuData() {
    const updatedUserData = {
      thuSticked: this.thu_sticked,
      currentPoint: this.now_points,
    };
    this.user_repository.updateUserFields(
      this.userDataService.getUserId(),
      updatedUserData
    );
  }
  updateFriData() {
    const updatedUserData = {
      friSticked: this.fri_sticked,
      currentPoint: this.now_points,
    };
    this.user_repository.updateUserFields(
      this.userDataService.getUserId(),
      updatedUserData
    );
  }
  updateSatData() {
    const updatedUserData = {
      satSticked: this.sat_sticked,
      currentPoint: this.now_points,
    };
    this.user_repository.updateUserFields(
      this.userDataService.getUserId(),
      updatedUserData
    );
  }

  sun_sticked: any[] = [];
  mon_sticked: any[] = [];
  tue_sticked: any[] = [];
  wed_sticked: any[] = [];
  thu_sticked: any[] = [];
  fri_sticked: any[] = [];
  sat_sticked: any[] = [];

  day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  currentday = 1;

  addPoint(index: number) {
    const stickerIndex = index + (this.currentPage - 1) * this.itemsPerPage;
    switch (this.currentday) {
      case 0:
        for (let i = 0; i < this.sun_sticked.length; i++) {
          if (!this.sun_sticked[i].icon) {
            this.sun_sticked[i] = {
              icon: this.pointData[stickerIndex].icon,
              bgImage: this.pointData[stickerIndex].bgImage,
              point: this.pointData[stickerIndex].point,
            };
            this.calculate_point(stickerIndex);
            if (!this.guest) {
              this.updateSunData();
            }
            break;
          }
        }
        break;
      case 1:
        for (let i = 0; i < this.mon_sticked.length; i++) {
          if (!this.mon_sticked[i].icon) {
            this.mon_sticked[i] = {
              icon: this.pointData[stickerIndex].icon,
              bgImage: this.pointData[stickerIndex].bgImage,
              point: this.pointData[stickerIndex].point,
            };
            this.calculate_point(stickerIndex);
            if (!this.guest) {
              this.updateMonData();
            }
            break;
          }
        }
        break;
      case 2:
        for (let i = 0; i < this.tue_sticked.length; i++) {
          if (!this.tue_sticked[i].icon) {
            this.tue_sticked[i] = {
              icon: this.pointData[stickerIndex].icon,
              bgImage: this.pointData[stickerIndex].bgImage,
              point: this.pointData[stickerIndex].point,
            };
            this.calculate_point(stickerIndex);
            if (!this.guest) {
              this.updateThuData();
            }
            break;
          }
        }
        break;
      case 3:
        for (let i = 0; i < this.wed_sticked.length; i++) {
          if (!this.wed_sticked[i].icon) {
            this.wed_sticked[i] = {
              icon: this.pointData[stickerIndex].icon,
              bgImage: this.pointData[stickerIndex].bgImage,
              point: this.pointData[stickerIndex].point,
            };
            this.calculate_point(stickerIndex);
            if (!this.guest) {
              this.updateWednData();
            }
            break;
          }
        }
        break;
      case 4:
        for (let i = 0; i < this.thu_sticked.length; i++) {
          if (!this.thu_sticked[i].icon) {
            this.thu_sticked[i] = {
              icon: this.pointData[stickerIndex].icon,
              bgImage: this.pointData[stickerIndex].bgImage,
              point: this.pointData[stickerIndex].point,
            };
            this.calculate_point(stickerIndex);
            if (!this.guest) {
              this.updateThuData();
            }
            break;
          }
        }
        break;
      case 5:
        for (let i = 0; i < this.fri_sticked.length; i++) {
          if (!this.fri_sticked[i].icon) {
            this.fri_sticked[i] = {
              icon: this.pointData[stickerIndex].icon,
              bgImage: this.pointData[stickerIndex].bgImage,
              point: this.pointData[stickerIndex].point,
            };
            this.calculate_point(stickerIndex);
            if (!this.guest) {
              this.updateFriData();
            }
            break;
          }
        }
        break;
      case 6:
        for (let i = 0; i < this.sat_sticked.length; i++) {
          if (!this.sat_sticked[i].icon) {
            this.sat_sticked[i] = {
              icon: this.pointData[stickerIndex].icon,
              bgImage: this.pointData[stickerIndex].bgImage,
              point: this.pointData[stickerIndex].point,
            };
            this.calculate_point(stickerIndex);
            if (!this.guest) {
              this.updateSatData();
            }
            break;
          }
        }
        break;
    }
  }

  deletePoint(index: number): void {
    switch (this.currentday) {
      case 0:
        if (
          index >= 0 &&
          index < this.sun_sticked.length &&
          this.sun_sticked[index].text != ''
        ) {
          const decrease = parseInt(this.sun_sticked[index].point);
          this.now_points = this.now_points - decrease;
          this.sun_sticked[index] = { text: '' };
        }
        if (!this.guest) {
          this.updateSunData();
        }
        break;
      case 1:
        if (
          index >= 0 &&
          index < this.mon_sticked.length &&
          this.mon_sticked[index].text != ''
        ) {
          const decrease = parseInt(this.mon_sticked[index].point);
          this.now_points = this.now_points - decrease;
          this.mon_sticked[index] = { text: '' };
        }
        if (!this.guest) {
          this.updateMonData();
        }
        break;
      case 2:
        if (
          index >= 0 &&
          index < this.tue_sticked.length &&
          this.tue_sticked[index].text != ''
        ) {
          const decrease = parseInt(this.tue_sticked[index].point);
          this.now_points = this.now_points - decrease;
          this.tue_sticked[index] = { text: '' };
        }
        if (!this.guest) {
          this.updateTueData();
        }
        break;
      case 3:
        if (
          index >= 0 &&
          index < this.wed_sticked.length &&
          this.wed_sticked[index].text != ''
        ) {
          const decrease = parseInt(this.wed_sticked[index].point);
          this.now_points = this.now_points - decrease;
          this.wed_sticked[index] = { text: '' };
        }
        if (!this.guest) {
          this.updateWednData();
        }
        break;
      case 4:
        if (
          index >= 0 &&
          index < this.thu_sticked.length &&
          this.thu_sticked[index].text != ''
        ) {
          const decrease = parseInt(this.thu_sticked[index].point);
          this.now_points = this.now_points - decrease;
          this.thu_sticked[index] = { text: '' };
        }
        if (!this.guest) {
          this.updateThuData();
        }
        break;
      case 5:
        if (
          index >= 0 &&
          index < this.fri_sticked.length &&
          this.fri_sticked[index].text != ''
        ) {
          const decrease = parseInt(this.fri_sticked[index].point);
          this.now_points = this.now_points - decrease;
          this.fri_sticked[index] = { text: '' };
        }
        if (!this.guest) {
          this.updateFriData();
        }
        break;
      case 6:
        if (
          index >= 0 &&
          index < this.sat_sticked.length &&
          this.sat_sticked[index].text != ''
        ) {
          const decrease = parseInt(this.sat_sticked[index].point);
          this.now_points = this.now_points - decrease;
          this.sat_sticked[index] = { text: '' };
        }
        if (!this.guest) {
          this.updateSatData();
        }
        break;
    }
  }

  change_day_plus() {
    if (this.currentday < this.day.length - 1) {
      this.currentday++;
    } else {
      this.currentday = 0;
    }
  }

  change_day_minus() {
    if (this.currentday > 0) {
      this.currentday--;
    } else {
      this.currentday = this.day.length - 1;
    }
  }

  // -------------------------------------Praise Sticker---------------------------------------------
  praise_fontColor: string = '';
  praiseBg = '';

  praise_sticked: any[] = [];

  updatepraiseData() {
    const updatedUserData = {
      praiseSticked: this.praise_sticked,
    };
    this.user_repository.updateUserFields(
      this.userDataService.getUserId(),
      updatedUserData
    );
  }
  getPraiseDataForPage(page: number): any[] {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.praise_data.slice(startIndex, endIndex);
  }

  get totalNumberOfPraisePages(): number {
    return Math.ceil(this.praise_data.length / this.itemsPerPage);
  }

  addPraise(index: number) {
    const stickerIndex = index + (this.currentPage - 1) * this.itemsPerPage;
    for (let i = 0; i < this.praise_sticked.length; i++) {
      if (this.praise_sticked[i].text == '') {
        this.praise_sticked[i] = {
          text: this.praise_data[stickerIndex].text,
        };
        if (!this.guest) {
          this.updatepraiseData();
        }
        break;
      }
    }
  }

  deletePraise(index: number): void {
    if (index >= 0 && index < this.praise_sticked.length) {
      this.praise_sticked[index] = { text: '' };
    }
    if (!this.guest) {
      this.updatepraiseData();
    }
  }

  // -------------------------------------Feeling Sticker---------------------------------------------
  feeling_fontColor: string = '';
  feelingBg = '';

  getFeelingDataForPage(page: number): any[] {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.feelingData.slice(startIndex, endIndex);
  }

  get totalNumberOfFeelingPages(): number {
    return Math.ceil(this.feelingData.length / this.itemsPerPage);
  }

  feeling_sticked: any[] = [];

  updatefeelingData() {
    const updatedUserData = {
      feelingSticked: this.feeling_sticked,
    };
    this.user_repository.updateUserFields(
      this.userDataService.getUserId(),
      updatedUserData
    );
  }

  addFeeling(index: number) {
    const stickerIndex = index + (this.currentPage - 1) * this.itemsPerPage;
    for (let i = 0; i < this.feeling_sticked.length; i++) {
      if (this.feeling_sticked[i].text == '') {
        this.feeling_sticked[i] = {
          text: this.feelingData[stickerIndex].text,
        };
        if (!this.guest) {
          this.updatefeelingData();
        }
        break;
      }
    }
  }

  deleteFeeling(index: number): void {
    if (index >= 0 && index < this.feeling_sticked.length) {
      this.feeling_sticked[index] = { text: '' };
    }
    if (!this.guest) {
      this.updatefeelingData();
    }
  }

  // -------------------------------------Reward Sticker---------------------------------------------

  rewardBg = '';
  reward_fontColor = '';
  reward_sticked: any[] = [];
  updaterewardData() {
    const updatedUserData = {
      rewardSticked: this.reward_sticked,
    };
    this.user_repository.updateUserFields(
      this.userDataService.getUserId(),
      updatedUserData
    );
  }

  getRewardDataForPage(page: number): any[] {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.rewardData.slice(startIndex, endIndex);
  }

  get totalNumberOfRewardPages(): number {
    return Math.ceil(this.rewardData.length / this.itemsPerPage);
  }

  addReward(index: number) {
    const stickerIndex = index + (this.currentPage - 1) * this.itemsPerPage;
    for (let i = 0; i < this.reward_sticked.length; i++) {
      if (this.reward_sticked[i].text == '') {
        this.reward_sticked[i] = {
          text: this.rewardData[stickerIndex].text,
          imageUrl: this.rewardData[stickerIndex].imageUrl,
        };
        if (!this.guest) {
          this.updaterewardData();
        }
        break;
      }
    }
  }

  deleteReward(index: number): void {
    if (index >= 0 && index < this.reward_sticked.length) {
      this.reward_sticked[index] = { text: '' };
    }
    if (!this.guest) {
      this.updaterewardData();
    }
  }
  // -----------------------------------calculate point-------------------------------------------
  now_points = 0;

  pointA = 30;
  rewardA = false;

  pointB = 40;
  rewardB = false;

  updatePointA() {
    const updatedUserData = {
      pointA: this.pointA,
    };
    this.user_repository.updateUserFields(
      this.userDataService.getUserId(),
      updatedUserData
    );
  }

  updatePointB() {
    const updatedUserData = {
      pointB: this.pointB,
    };
    this.user_repository.updateUserFields(
      this.userDataService.getUserId(),
      updatedUserData
    );
  }

  change_pointA() {
    Swal.fire({
      title: 'Change Point',
      text: '1-100',
      input: 'number',
      inputAttributes: {
        autocapitalize: 'off',
        step: 'any',
      },
      showCancelButton: true,
      confirmButtonText: 'Change',
      confirmButtonColor: '#A1C554',
      cancelButtonColor: '#FC6F6F',
      reverseButtons: true,
      showLoaderOnConfirm: true,
      preConfirm: (newValue) => {
        if (newValue == '') {
          Swal.fire({
            icon: 'error',
            title: 'min point is 1',
            text: 'Try again',
            confirmButtonColor: '#A1C554',
          });
          return;
        } else if (newValue > 100) {
          Swal.fire({
            icon: 'error',
            title: 'max point is 100',
            text: 'Try again',
            confirmButtonColor: '#A1C554',
          });
          return;
        } else {
          this.pointA = newValue;
          Swal.fire({
            title: 'Point Updated',
            confirmButtonColor: '#A1C554',
          });
          if (!this.guest) {
            this.updatePointA();
          }
        }
      },
    });
  }

  change_pointB() {
    Swal.fire({
      title: 'Change Point',
      text: '1-100',
      input: 'number',
      inputAttributes: {
        autocapitalize: 'off',
        step: 'any',
      },
      showCancelButton: true,
      confirmButtonText: 'Change',
      confirmButtonColor: '#A1C554',
      cancelButtonColor: '#FC6F6F',
      reverseButtons: true,
      showLoaderOnConfirm: true,
      preConfirm: (newValue) => {
        if (newValue == '') {
          Swal.fire({
            icon: 'error',
            title: 'min point is 1',
            text: 'Try again',
            confirmButtonColor: '#A1C554',
          });
        } else if (newValue > 100) {
          Swal.fire({
            icon: 'error',
            title: 'max point is 100',
            text: 'Try again',
            confirmButtonColor: '#A1C554',
          });
          return;
        } else {
          this.pointB = newValue;
          Swal.fire({
            title: 'Point Updated',
            confirmButtonColor: '#A1C554',
          });
          if (!this.guest) {
            this.updatePointB();
          }
        }
      },
    });
  }
  calculate_point(index: number) {
    if (this.now_points < this.pointA && this.rewardA == true) {
      this.rewardA = false;
    }
    if (this.now_points < this.pointB && this.rewardB == true) {
      this.rewardB = false;
    }
    const point = parseInt(this.pointData[index].point);
    this.now_points = this.now_points + point;
    this.check_point();
  }

  check_point() {
    if (
      this.now_points >= this.pointA &&
      this.rewardA == false &&
      this.now_points >= this.pointB &&
      this.rewardB == false
    ) {
      const message = `You got a ${this.reward_sticked[0].text} !`;
      Swal.fire({
        title: 'Congratulations!',
        text: this.reward_sticked[0].text,
        imageUrl: this.reward_sticked[0].imageUrl,
        imageHeight: 110,
        imageWidth: 110,
        imageAlt: 'A reward image',
        confirmButtonText: 'Yay!',
        confirmButtonColor: '#A1C554',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Congratulations!',
            text: this.reward_sticked[1].text,
            imageUrl: this.reward_sticked[1].imageUrl,
            imageHeight: 110,
            imageWidth: 110,
            imageAlt: 'A reward image',
            confirmButtonText: 'Yay!',
            confirmButtonColor: '#A1C554',
          });
        }
      });
      this.rewardB = true;
      this.rewardA = true;
    } else {
      if (this.now_points >= this.pointA && this.rewardA == false) {
        const message = `You got a ${this.reward_sticked[0].text} !`;
        Swal.fire({
          title: 'Congratulations!',
          text: this.reward_sticked[0].text,
          imageUrl: this.reward_sticked[0].imageUrl,
          imageHeight: 110,
          imageWidth: 110,
          imageAlt: 'A reward image',
          confirmButtonText: 'Yay!',
          confirmButtonColor: '#A1C554',
        });
        this.rewardA = true;
      }
      if (this.now_points >= this.pointB && this.rewardB == false) {
        const message = `You got a ${this.reward_sticked[1].text} !`;
        Swal.fire({
          title: 'Congratulations!',
          text: this.reward_sticked[1].text,
          imageUrl: this.reward_sticked[1].imageUrl,
          imageHeight: 110,
          imageWidth: 110,
          imageAlt: 'A reward image',
          confirmButtonText: 'Yay!',
          confirmButtonColor: '#A1C554',
        });
        this.rewardB = true;
      }
    }
  }

  // -----------------------------------Clear buttons------------------------------------------

  clear_activity() {
    Swal.fire({
      title: 'Clear activity on the board',
      text: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes !',
      cancelButtonText: 'cancel !',
      reverseButtons: true,
      confirmButtonColor: '#A1C554',
      cancelButtonColor: '#FC6F6F',
    }).then((result) => {
      if (result.isConfirmed) {
        this.activity_sticked = [
          { text: '' },
          { text: '' },
          { text: '' },
          { text: '' },
          { text: '' },
        ];
        Swal.fire({
          icon: 'success',
          title: 'Clear!',
          text: 'All activity have been deleted.',
          confirmButtonColor: '#A1C554',
        });
        if (!this.guest) {
          this.updateActivityData();
        }
      }
    });
  }

  clear_point() {
    Swal.fire({
      title: 'Clear points on the board',
      text: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes !',
      cancelButtonText: 'cancel !',
      reverseButtons: true,
      confirmButtonColor: '#A1C554',
      cancelButtonColor: '#FC6F6F',
    }).then((result) => {
      if (result.isConfirmed) {
        this.clear_point_all();
        Swal.fire({
          icon: 'success',
          title: 'Clear!',
          text: 'All points have been deleted.',
          confirmButtonColor: '#A1C554',
        });
      }
    });
  }

  clear_point_all() {
    this.sun_sticked = [
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
    ];
    this.mon_sticked = [
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
    ];
    this.tue_sticked = [
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
    ];
    this.wed_sticked = [
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
    ];
    this.thu_sticked = [
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
    ];
    this.fri_sticked = [
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
    ];
    this.sat_sticked = [
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
    ];
    this.now_points = 0;
    if (!this.guest) {
      this.updateSunData();
      this.updateMonData();
      this.updateTueData();
      this.updateWednData();
      this.updateThuData();
      this.updateFriData();
      this.updateSatData();
    }
  }

  clear_praise() {
    Swal.fire({
      title: 'Clear praise sticker on the board',
      text: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes !',
      cancelButtonText: 'cancel !',
      reverseButtons: true,
      confirmButtonColor: '#A1C554',
      cancelButtonColor: '#FC6F6F',
    }).then((result) => {
      if (result.isConfirmed) {
        this.praise_sticked = [{ text: '' }, { text: '' }, { text: '' }];
        Swal.fire({
          icon: 'success',
          title: 'Clear!',
          text: 'All praise sticker have been deleted.',
          confirmButtonColor: '#A1C554',
        });
        if (!this.guest) {
          this.updatepraiseData();
        }
      }
    });
  }

  clear_feeling() {
    Swal.fire({
      title: 'Clear feeling sticker on the board',
      text: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes !',
      cancelButtonText: 'cancel !',
      reverseButtons: true,
      confirmButtonColor: '#A1C554',
      cancelButtonColor: '#FC6F6F',
    }).then((result) => {
      if (result.isConfirmed) {
        this.feeling_sticked = [{ text: '' }, { text: '' }, { text: '' }];
        Swal.fire({
          icon: 'success',
          title: 'Clear!',
          text: 'All feeling sticker have been deleted.',
          confirmButtonColor: '#A1C554',
        });
        if (!this.guest) {
          this.updatefeelingData();
        }
      }
    });
  }

  // ----------------------------------------------------------------------------------------------

  linkPage(link:string){
    if(this.guest){
      Swal.fire({
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/5448/5448404.png',
        imageWidth: 120,
        imageHeight: 120,
        title: 'Please SignIn to unlock!',
        showCancelButton: true,
        confirmButtonText: 'Sign In !',
        cancelButtonText: 'No,thanks',
        reverseButtons: true,
        confirmButtonColor: '#A1C554',
        cancelButtonColor: '#FC6F6F',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/signin']);
        }
      });
    }else{
      this.router.navigate([link]);
    }
  }



}
