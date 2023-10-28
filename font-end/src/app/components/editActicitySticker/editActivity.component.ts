import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ActivitySticker, User } from 'src/app/models/userModel/user.model';
import { UserRepository } from 'src/app/models/userModel/user.repository';
import { UserDataService } from 'src/app/services/user-data.service';
import { StickerDataService } from 'src/app/services/sticker-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'editActivity',
  templateUrl: './editActivity.component.html',
  styleUrls: ['./editActivity.component.css'],
})
export class EditActivity {
  constructor(
    private user_repository: UserRepository,
    private userDataService: UserDataService,
    private sticker_service: StickerDataService
  ) {
    // this.activityData = this.user?.stickers?.activity
    //   ? this.user.stickers.activity
    //   : [];
    this.itemsPerPage = 13;
    this.currentPage = 1;
    this.changeThemeOn = false;
    this.createStickerOn = false;

    this.selectedBgIndex = -1;

    this.activityIcon = this.sticker_service.getAllActivityIcon();
  }

  ngOnInit() {
    // Fetch the user data when the component initializes
    this.user_repository
      .getUserById(this.userDataService.getUserId())
      .subscribe((user) => {
        this.user = user;
        this.activityData = this.user?.stickers?.activity
          ? this.user.stickers.activity
          : [];
        this.activityBg = this.user.activityTheme.bg;
        this.activity_fontColor = this.user.activityTheme.font;
      });
  }

  activityTheme = this.sticker_service.getAllActivityTheme();
  itemsPerPage: number = 13;
  currentPage: number = 1;

  changeThemeOn: boolean = false;
  createStickerOn: boolean = false;

  activityBg = '';
  activity_fontColor = '';
  user: any | null = {};
  activityData: any[] = [];

  dropSticker(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  getActivityDataForPage(page: number): any[] {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.activityData.slice(startIndex, endIndex);
  }

  changePage(offset: number): void {
    this.currentPage += offset;
  }

  get totalNumberOfActivityPages(): number {
    return Math.ceil(this.activityData.length / this.itemsPerPage);
  }

  // ----------------------------- change Theme------------------------------------------

  activityIcon: any[];
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
      this.sticker_service.setActivitySticker(this.selectedBgIndex);
      try {
        await this.user_repository.updateUserFields(
          this.userDataService.getUserId(),
          this.sticker_service.getActivityTheme()
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
  activityName: string = '';
  selectedIconIndex: number = -1;
  currentIconPage: number = 1;
  itemsIconPerPage: number = 18;
  newActivitySticker: ActivitySticker = { text: '', imageUrl: '' };

  create_stickerOnOff() {
    this.createStickerOn = this.createStickerOn ? false : true;
  }

  selectIcon(index: number) {
    this.selectedIconIndex = index;
  }

  isIconSelected(index: number) {
    return this.selectedIconIndex === index;
  }

  changeIconPage(offset: number): void {
    this.currentIconPage += offset;
  }

  get totalNumberOfIconPages(): number {
    return Math.ceil(this.activityIcon.length / this.itemsIconPerPage);
  }

  getIconDataForPage(page: number): any[] {
    const startIndex = (page - 1) * this.itemsIconPerPage;
    const endIndex = startIndex + this.itemsIconPerPage;
    return this.activityIcon.slice(startIndex, endIndex);
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
      if (this.activityName !== '' && this.selectedIconIndex !== -1) {
        console.log('Activity Name: ' + this.activityName);
        this.newActivitySticker.text = this.activityName;
        this.newActivitySticker.imageUrl = this.activityIcon[this.selectedIconIndex];
  
        try {
          await this.user_repository.pushOrPullStickers(
            this.userDataService.getUserId(),
            'activity',
            'push',
            this.newActivitySticker
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
        if (this.activityName === '') {
          await Swal.fire({
            icon: 'warning',
            title: 'Please enter activity name',
            confirmButtonText: 'OK',
            confirmButtonColor: '#A1C554',
          });
        } else if (this.selectedIconIndex === -1) {
          await Swal.fire({
            icon: 'warning',
            title: 'Please select activity icon',
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
  
        const pulledSticker = this.activityData[index];
        await this.user_repository.pushOrPullStickers(
          this.userDataService.getUserId(),
          'activity',
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
