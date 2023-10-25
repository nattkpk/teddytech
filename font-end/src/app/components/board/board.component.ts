import {
  CdkDragDrop,
  CdkDragStart,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';import { User } from 'src/app/models/userModel/user.model';
import { UserRepository } from 'src/app/models/userModel/user.repository';
import { UserDataService } from 'src/app/services/user-data.service';
;
import Swal from 'sweetalert2';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class Board {
  
  selectedgenre: string;
  addBg = '';
  itemsPerPage: number = 15;
  currentPage: number = 1;

  constructor(private user_repository: UserRepository,private userDataService: UserDataService,) {
    this.selectedgenre = 'Activity';
    this.activityData = this.user?.stickers?.activity ? this.user.stickers.activity : [];
    this.praise_data = this.user?.stickers?.praise ? this.user.stickers.praise : [];
    this.feelingData = this.user?.stickers?.feeling ? this.user.stickers.feeling : [];
    this.pointData = this.user?.stickers?.point ? this.user.stickers.point : [];
    this.rewardData = this.user?.stickers?.reward ? this.user.stickers.reward : [];
  }

  get user(): User | null {
    return this.user_repository.getUserById(this.userDataService.getUserId());
  }

  dropSticker(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }  
  
  changePage(offset: number): void {
    this.currentPage += offset;
  }

  // ---------------------------- Activity Sticker -------------------------------------

  activityBg = '../../../assets/img/BgSticker/Diamon4.png';
  activity_fontColor = 'black';
  activity_sticked: any[] = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];


  activityData : any[]

  getActivityDataForPage(page: number): any[] {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.activityData.slice(startIndex, endIndex);
  }
  
  get totalNumberOfActivityPages(): number {
    return Math.ceil(this.activityData.length / this.itemsPerPage);
  }
  
  addActivity(index: number) {
    for (let i = 0; i < this.activity_sticked.length; i++) {
      if (!this.activity_sticked[i].imageUrl) {
        this.activity_sticked[i] = {
          text: this.activityData[index].text,
          imageUrl: this.activityData[index].imageUrl,
        };
        break;
      }
    }
  }

  deleteActivity(index: number): void {
    if (index >= 0 && index < this.activity_sticked.length) {
      this.activity_sticked[index] = { text: '' };
    }
  }


  // --------------------------------Point Sticker---------------------------------------------
  pointData: any[]

  getPointDataForPage(page: number): any[] {
    const startIndex = (page - 1) * 12;
    const endIndex = startIndex + 12;
    return this.pointData.slice(startIndex, endIndex);
  }
  
  get totalNumberOfPointPages(): number {
    return Math.ceil(this.pointData.length / 12);
  }

  sun_sticked: any[] = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];
  mon_sticked: any[] = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];
  tue_sticked: any[] = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];
  wed_sticked: any[] = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];
  thu_sticked: any[] = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];
  fri_sticked: any[] = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];
  sat_sticked: any[] = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];

  day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  currentday = 0;

  addPoint(index: number) {
    switch (this.currentday) {
      case 0:
        for (let i = 0; i < this.sun_sticked.length; i++) {
          if (!this.sun_sticked[i].icon) {
            this.sun_sticked[i] = {
              icon: this.pointData[index].icon,
              bgImage: this.pointData[index].bgImage,
              point: this.pointData[index].point,
            };
            this.calculate_point(index);
            break;
          }
        }
        break;
      case 1:
        for (let i = 0; i < this.mon_sticked.length; i++) {
          if (!this.mon_sticked[i].icon) {
            this.mon_sticked[i] = {
              icon: this.pointData[index].icon,
              bgImage: this.pointData[index].bgImage,
              point: this.pointData[index].point,
            };
            this.calculate_point(index);
            break;
          }
        }
        break;
      case 2:
        for (let i = 0; i < this.tue_sticked.length; i++) {
          if (!this.tue_sticked[i].icon) {
            this.tue_sticked[i] = {
              icon: this.pointData[index].icon,
              bgImage: this.pointData[index].bgImage,
              point: this.pointData[index].point,
            };
            this.calculate_point(index);
            break;
          }
        }
        break;
      case 3:
        for (let i = 0; i < this.wed_sticked.length; i++) {
          if (!this.wed_sticked[i].icon) {
            this.wed_sticked[i] = {
              icon: this.pointData[index].icon,
              bgImage: this.pointData[index].bgImage,
              point: this.pointData[index].point,
            };
            this.calculate_point(index);
            break;
          }
        }
        break;
      case 4:
        for (let i = 0; i < this.thu_sticked.length; i++) {
          if (!this.thu_sticked[i].icon) {
            this.thu_sticked[i] = {
              icon: this.pointData[index].icon,
              bgImage: this.pointData[index].bgImage,
              point: this.pointData[index].point,
            };
            this.calculate_point(index);
            break;
          }
        }
        break;
      case 5:
        for (let i = 0; i < this.fri_sticked.length; i++) {
          if (!this.fri_sticked[i].icon) {
            this.fri_sticked[i] = {
              icon: this.pointData[index].icon,
              bgImage: this.pointData[index].bgImage,
              point: this.pointData[index].point,
            };
            this.calculate_point(index);
            break;
          }
        }
        break;
      case 6:
        for (let i = 0; i < this.sat_sticked.length; i++) {
          if (!this.sat_sticked[i].icon) {
            this.sat_sticked[i] = {
              icon: this.pointData[index].icon,
              bgImage: this.pointData[index].bgImage,
              point: this.pointData[index].point,
            };
            this.calculate_point(index);
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
  praise_fontColor: string = '#dd689d';
  praiseBg = '../../../assets/img/BgSticker/Heart8.png';

  praise_data: any[]

  praise_sticked: any[] = [{ text: '' }, { text: '' }, { text: '' }];

  getPraiseDataForPage(page: number): any[] {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.praise_data.slice(startIndex, endIndex);
  }
  
  get totalNumberOfPraisePages(): number {
    return Math.ceil(this.praise_data.length / this.itemsPerPage);
  }

  addPraise(index: number) {
    for (let i = 0; i < this.praise_sticked.length; i++) {
      if (this.praise_sticked[i].text == '') {
        this.praise_sticked[i] = {
          text: this.praise_data[index].text,
        };
        break;
      }
    }
  }

  deletePraise(index: number): void {
    if (index >= 0 && index < this.praise_sticked.length) {
      this.praise_sticked[index] = { text: '' };
    }
  }

  // -------------------------------------Feeling Sticker---------------------------------------------
  feeling_fontColor: string = '#947218';
  feelingBg = '../../../assets/img/BgSticker/Star5.png';

  feelingData: any[]

  getFeelingDataForPage(page: number): any[] {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.feelingData.slice(startIndex, endIndex);
  }
  
  get totalNumberOfFeelingPages(): number {
    return Math.ceil(this.feelingData.length / this.itemsPerPage);
  }

  feeling_sticked: any[] = [{ text: '' }, { text: '' }, { text: '' }];

  addFeeling(index: number) {
    for (let i = 0; i < this.feeling_sticked.length; i++) {
      if (this.feeling_sticked[i].text == '') {
        this.feeling_sticked[i] = {
          text: this.feelingData[index].text,
        };
        break;
      }
    }
  }

  deleteFeeling(index: number): void {
    if (index >= 0 && index < this.feeling_sticked.length) {
      this.feeling_sticked[index] = { text: '' };
    }
  }

  // -------------------------------------Reward Sticker---------------------------------------------

  rewardBg = '../../../assets/img/BgSticker/wow2.png';
  reward_fontColor = '#225E92';
  reward_sticked: any[] = [{ text: '' }, { text: '' }];
  rewardData: any[]

  getRewardDataForPage(page: number): any[] {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.rewardData.slice(startIndex, endIndex);
  }
  
  get totalNumberOfRewardPages(): number {
    return Math.ceil(this.rewardData.length / this.itemsPerPage);
  }


  addReward(index: number) {
    for (let i = 0; i < this.reward_sticked.length; i++) {
      if (this.reward_sticked[i].text == '') {
        this.reward_sticked[i] = {
          text: this.rewardData[index].text,
          imageUrl: this.rewardData[index].imageUrl,
        };
        break;
      }
    }
  }

  deleteReward(index: number): void {
    if (index >= 0 && index < this.reward_sticked.length) {
      this.reward_sticked[index] = { text: '' };
    }
  }
  // -----------------------------------calculate point-------------------------------------------
  now_points = 0;

  pointA = 15;
  rewardA = false;

  pointB = 20;
  rewardB = false;

  change_pointA() {
    Swal.fire({
      title: 'Change Point',
      input: 'number',
      inputAttributes: {
        autocapitalize: 'off',
        step: 'any',
      },
      showCancelButton: true,
      confirmButtonText: 'Change',
      confirmButtonColor:'#A1C554',
      cancelButtonColor: '#FC6F6F',
      showLoaderOnConfirm: true,
      preConfirm: (newValue) => {
        if (newValue == '') {
          this.pointA = 0;
        } else {
          this.pointA = newValue;
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Point Updated',
          confirmButtonColor:'#A1C554',
        });
      }
    });
  }

  change_pointB() {
    Swal.fire({
      title: 'Change Point',
      input: 'number',
      inputAttributes: {
        autocapitalize: 'off',
        step: 'any',
      },
      showCancelButton: true,
      confirmButtonText: 'Change',
      confirmButtonColor:'#A1C554',
      cancelButtonColor: '#FC6F6F',
      showLoaderOnConfirm: true,
      preConfirm: (newValue) => {
        if (newValue == '') {
          this.pointB = 0;
        } else {
          this.pointB = newValue;
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Point Updated',
          confirmButtonColor:'#A1C554',
        });
      }
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
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Clear activity on the board',
        text: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes !',
        cancelButtonText: 'cancel !',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.activity_sticked = [
            { text: '' },
            { text: '' },
            { text: '' },
            { text: '' },
            { text: '' },
          ];
          swalWithBootstrapButtons.fire(
            'Clear!',
            'All activity have been deleted.',
            'success'
          );
        }
      });
  }

  clear_point() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Clear points on the board',
        text: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes !',
        cancelButtonText: 'cancel !',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.clear_point_all();
          swalWithBootstrapButtons.fire(
            'Clear!',
            'All points have been deleted.',
            'success'
          );
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
  }

  clear_praise() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Clear praise sticker on the board',
        text: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes !',
        cancelButtonText: 'cancel !',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.praise_sticked = [{ text: '' }, { text: '' }, { text: '' }];
          swalWithBootstrapButtons.fire(
            'Clear!',
            'All praise sticker have been deleted.',
            'success'
          );
        }
      });
  }

  clear_feeling() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Clear feeling sticker on the board',
        text: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes !',
        cancelButtonText: 'cancel !',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.feeling_sticked = [{ text: '' }, { text: '' }, { text: '' }];
          swalWithBootstrapButtons.fire(
            'Clear!',
            'All feeling sticker have been deleted.',
            'success'
          );
        }
      });
  }
}
