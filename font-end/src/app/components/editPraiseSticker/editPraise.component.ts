import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { PraiseSticker} from 'src/app/models/userModel/user.model';
import { UserRepository } from 'src/app/models/userModel/user.repository';
import { UserDataService } from 'src/app/services/user-data.service';
import { StickerDataService } from 'src/app/services/sticker-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'editPraise',
  templateUrl: './editPraise.component.html',
  styleUrls: ['./editPraise.component.css'],
})

export class EditPraise {
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
    this.praiseTheme = this.sticker_service.getAllpraiseTheme();;
  }

  ngOnInit() {
    this.user_repository
      .getUserById(this.userDataService.getUserId())
      .subscribe((user) => {
        this.user = user;

        this.pointData =  this.user.stickers.point;
        this.feelingData = this.user?.stickers?.feeling
        this.rewardData = this.user?.stickers?.reward
        this.activityData = this.user?.stickers?.activity

        this.praiseData = this.user.stickers.praise;
        this.bg = this.user.praiseTheme.bg;
        this.fontColor = this.user.praiseTheme.font;
      });
  }

  praiseTheme: any[];
  itemsPerPage: number = 13;
  currentPage: number = 1;

  changeThemeOn: boolean = false;
  createStickerOn: boolean = false;

  bg = '';
  fontColor = '';
  user: any | null = {};

  praiseData: any[] = [];
  pointData: any[] = [];
  activityData: any[] = [];
  feelingData: any[] = [];
  rewardData: any[] = [];

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

  getPraiseDataForPage(page: number): any[] {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.praiseData.slice(startIndex, endIndex);
  }

  changePage(offset: number): void {
    this.currentPage += offset;
  }

  get totalNumberOfPraisePages(): number {
    return Math.ceil(this.praiseData.length / this.itemsPerPage);
  }

  // ----------------------------- change Theme------------------------------------------

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
      this.sticker_service.setpraiseSticker(this.selectedBgIndex);
      try {
        await this.user_repository.updateUserFields(
          this.userDataService.getUserId(),
          this.sticker_service.getpraiseTheme()
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
  praisegName: string = '';
  newPraiseSticker: PraiseSticker = { text: ''};

  create_stickerOnOff() {
    this.createStickerOn = this.createStickerOn ? false : true;
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
      if (this.praisegName !== '') {
        console.log('Praise: ' + this.praisegName);
        this.newPraiseSticker.text = this.praisegName;
  
        try {
          await this.user_repository.pushOrPullStickers(
            this.userDataService.getUserId(),
            'praise',
            'push',
            this.newPraiseSticker
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
        if (this.praisegName === '') {
          await Swal.fire({
            icon: 'warning',
            title: 'Please enter the praise',
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
  
        const pulledSticker = this.praiseData[index];
        await this.user_repository.pushOrPullStickers(
          this.userDataService.getUserId(),
          'praise',
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
