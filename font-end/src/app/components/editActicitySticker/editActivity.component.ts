import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { User } from 'src/app/models/userModel/user.model';
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
    this.activityData = this.user?.stickers?.activity
      ? this.user.stickers.activity
      : [];
    this.itemsPerPage = 13;
    this.currentPage = 1;
    this.changeThemeOn = false;
    this.createStickerOn = true;

    this.activityBg = this.sticker_service.getActivityBg();
    this.activity_fontColor = this.sticker_service.getActivityFontColor();
    this.selectedBgIndex = 3;

    this.activityIcon = this.sticker_service.getAllActivityIcon();
  }

  activityTheme = this.sticker_service.getAllActivityTheme();
  itemsPerPage: number = 13;
  currentPage: number = 1;

  changeThemeOn: boolean = false;
  createStickerOn: boolean = false;

  activityBg = this.sticker_service.getActivityBg();
  activity_fontColor = this.sticker_service.getActivityFontColor();
  activityData: any[];

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

  change_theme_confirm(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      confirmButtonText: 'Yes',
      confirmButtonColor: '#A1C554',
      showCancelButton: true,
      cancelButtonColor: '#FC6F6F',
    }).then((result) => {
      if (result.isConfirmed) {
        this.sticker_service.setActivitySticker(this.selectedBgIndex)
        this.activityBg = this.sticker_service.getActivityBg();
        this.activity_fontColor = this.sticker_service.getActivityFontColor();
        this.change_themeOnOff();
      }
    });
  }

  selectedBgIndex: number = 3;

  selectBg(index: number) {
    this.selectedBgIndex = index;
  }

  isBgSelected(index: number) {
    return this.selectedBgIndex === index;
  }

  //-------------------------------- create sticker ----------------------------
  selectedIconIndex: number = -1;
  currentIconPage: number = 1;
  itemsIconPerPage: number = 27;

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

  

}
