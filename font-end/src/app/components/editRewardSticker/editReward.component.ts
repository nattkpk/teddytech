import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { RewardSticker, User } from 'src/app/models/userModel/user.model';
import { UserRepository } from 'src/app/models/userModel/user.repository';
import { UserDataService } from 'src/app/services/user-data.service';
import { StickerDataService } from 'src/app/services/sticker-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'editReward',
  templateUrl: './editReward.component.html',
  styleUrls: ['./editReward.component.css'],
})
export class EditReward {
  constructor(
    private user_repository: UserRepository,
    private userDataService: UserDataService,
    private sticker_service: StickerDataService
  ) {
    this.itemsPerPage = 13;
    this.currentPage = 1;
    this.changeThemeOn = false;
    this.createStickerOn = false;

    this.selectedBgIndex = -1;

    this.rewardIcon = this.sticker_service.getAllrewardIcon();
    this.rewardTheme = this.sticker_service.getAllrewardTheme();
  }

  ngOnInit() {
    this.user_repository
      .getUserById(this.userDataService.getUserId())
      .subscribe((user) => {
        this.user = user;

        this.pointData =  this.user.stickers.point;
        this.feelingData = this.user?.stickers?.feeling
        this.activityData = this.user?.stickers?.activity
        this.praiseData = this.user.stickers.praise;

        this.rewardData = this.user.stickers.reward;
        this.bg = this.user.rewardTheme.bg;
        this.fontColor = this.user.rewardTheme.font;
      });
  }

  rewardTheme: any[];
  itemsPerPage: number = 13;
  currentPage: number = 1;

  changeThemeOn: boolean = false;
  createStickerOn: boolean = false;

  bg = '';
  fontColor = '';
  user: any | null = {};

 rewardData: any[] = [];
 praiseData: any[] = [];
 pointData: any[] = [];
 activityData: any[] = [];
 feelingData: any[] = [];

  dropSticker(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.updatePosition();
  }

  updatePosition(){
    const updatedUserData = {
      stickers: {
        activity: this.activityData,
        praise: this.praiseData,
        feeling: this.feelingData,
        point: this.pointData,
        reward: this.rewardData
      }
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

  changePage(offset: number): void {
    this.currentPage += offset;
  }

  get totalNumberOfRewardPages(): number {
    return Math.ceil(this.rewardData.length / this.itemsPerPage);
  }

  // ----------------------------- change Theme------------------------------------------

  rewardIcon: any[];
  change_themeOnOff() {
    this.changeThemeOn = this.changeThemeOn ? false : true;
  }

  async change_theme_confirm() {
    const result = await Swal.fire({
      title: 'Do you want to save the changes?',
      confirmButtonText: 'Yes',
      confirmButtonColor: '#A1C554',
      showCancelButton: true,
      cancelButtonColor: '#FC6F6F',
      reverseButtons: true,
    });
  
    if (result.isConfirmed) {
      this.sticker_service.setrewardSticker(this.selectedBgIndex);
      try {
        await this.user_repository.updateUserFields(
          this.userDataService.getUserId(),
          this.sticker_service.getrewardTheme()
        );
  
        await Swal.fire({
          icon: 'success',
          title: 'Change Theme Success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#A1C554',
        });
  
        this.change_themeOnOff();
        this.reloadpage();
      } catch (error) {
        console.error(error);
      }
    }
  }
  

  selectedBgIndex: number = -1;

  selectBg(index: number) {
    this.selectedBgIndex = index;
  }

  isBgSelected(index: number) {
    return this.selectedBgIndex === index;
  }

  //-------------------------------- create sticker ----------------------------
  rewardName: string = '';
  selectedIconIndex: number = -1;
  currentIconPage: number = 1;
  itemsIconPerPage: number = 18;
  newRewardSticker: RewardSticker = { text: '', imageUrl: '' };
  chooseIcon: number = -1;

  create_stickerOnOff() {
    this.createStickerOn = this.createStickerOn ? false : true;
  }

  selectIcon(index: number) {
    this.chooseIcon = index+((this.currentIconPage-1)*this.itemsIconPerPage)
    this.selectedIconIndex = index;
  }

  isIconSelected(index: number) {
    return this.selectedIconIndex === index;
  }

  changeIconPage(offset: number): void {
    this.currentIconPage += offset;
  }

  get totalNumberOfIconPages(): number {
    return Math.ceil(this.rewardIcon.length / this.itemsIconPerPage);
  }

  getIconDataForPage(page: number): any[] {
    const startIndex = (page - 1) * this.itemsIconPerPage;
    const endIndex = startIndex + this.itemsIconPerPage;
    return this.rewardIcon.slice(startIndex, endIndex);
  }

  async onSubmit() {
    const result = await Swal.fire({
      title: 'Create New Sticker?',
      confirmButtonText: 'Yes',
      confirmButtonColor: '#A1C554',
      showCancelButton: true,
      cancelButtonColor: '#FC6F6F',
      reverseButtons: true,
    });
  
    if (result.isConfirmed) {
      if (this.rewardName !== '' && this.chooseIcon !== -1) {
        console.log('Reward Name: ' + this.rewardName);
        this.newRewardSticker.text = this.rewardName;
        this.newRewardSticker.imageUrl = this.rewardIcon[this.chooseIcon];
  
        try {
          await this.user_repository.pushOrPullStickers(
            this.userDataService.getUserId(),
            'reward',
            'push',
            this.newRewardSticker
          );
  
          await Swal.fire({
            icon: 'success',
            title: 'Create Success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#A1C554',
          });
  
          this.create_stickerOnOff();
          this.reloadpage();
        } catch (error) {
          // Handle any errors that might occur during the operations
          console.error(error);
        }
      } else {
        if (this.rewardName === '') {
          await Swal.fire({
            icon: 'warning',
            title: 'Please enter Reward name',
            confirmButtonText: 'OK',
            confirmButtonColor: '#A1C554',
          });
        } else if (this.chooseIcon === -1) {
          await Swal.fire({
            icon: 'warning',
            title: 'Please select reward icon',
            confirmButtonText: 'OK',
            confirmButtonColor: '#A1C554',
          });
        }
      }
    }
  }
  

  reloadpage() {
    window.location.reload();
  }

  async deleteSticker(index: number) {
    try {
      const confirmationResult = await Swal.fire({
        icon: 'warning',
        title: 'Delete this Sticker?',
        confirmButtonText: 'Yes',
        confirmButtonColor: '#A1C554',
        showCancelButton: true,
        cancelButtonColor: '#FC6F6F',
        reverseButtons: true,
      });
  
      if (confirmationResult.isConfirmed) {
        await Swal.fire({
          icon: 'success',
          title: 'Delete Success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#A1C554',
        });
  
        const pulledSticker = this.rewardData[index];
        await this.user_repository.pushOrPullStickers(
          this.userDataService.getUserId(),
          'reward',
          'pull',
          pulledSticker
        );
  
        this.reloadpage();
      }
    } catch (error) {
      // Handle any errors that might occur during the operations
      console.error(error);
    }
  }
  
}
