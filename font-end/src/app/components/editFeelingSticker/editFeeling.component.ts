import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FeelingSticker} from 'src/app/models/userModel/user.model';
import { UserRepository } from 'src/app/models/userModel/user.repository';
import { UserDataService } from 'src/app/services/user-data.service';
import { StickerDataService } from 'src/app/services/sticker-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'editFeeling',
  templateUrl: './editFeeling.component.html',
  styleUrls: ['./editFeeling.component.css'],
})

export class EditFeeling {
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
    this.feelingTheme = this.sticker_service.getAllfeelingTheme();
  }

  ngOnInit() {
    this.user_repository
      .getUserById(this.userDataService.getUserId())
      .subscribe((user) => {
        this.user = user;

        this.feelingData = this.user.stickers.feeling;
        this.bg = this.user.feelingTheme.bg;
        this.fontColor = this.user.feelingTheme.font;
      });
  }

  feelingTheme: any[];
  itemsPerPage: number = 13;
  currentPage: number = 1;

  changeThemeOn: boolean = false;
  createStickerOn: boolean = false;

  bg = '';
  fontColor = '';
  user: any | null = {};
  feelingData: any[] = [];

  dropSticker(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  getFeelingDataForPage(page: number): any[] {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.feelingData.slice(startIndex, endIndex);
  }

  changePage(offset: number): void {
    this.currentPage += offset;
  }

  get totalNumberOfFeelingPages(): number {
    return Math.ceil(this.feelingData.length / this.itemsPerPage);
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
      this.sticker_service.setfeelingSticker(this.selectedBgIndex);
      try {
        await this.user_repository.updateUserFields(
          this.userDataService.getUserId(),
          this.sticker_service.getfeelingTheme()
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
  feelingName: string = '';
  newFeelingSticker: FeelingSticker = { text: ''};

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
      if (this.feelingName !== '') {
        console.log('Feeling: ' + this.feelingName);
        this.newFeelingSticker.text = this.feelingName;
  
        try {
          await this.user_repository.pushOrPullStickers(
            this.userDataService.getUserId(),
            'feeling',
            'push',
            this.newFeelingSticker
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
        if (this.feelingName === '') {
          await Swal.fire({
            icon: 'warning',
            title: 'Please enter your feeling',
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
  
        const pulledSticker = this.feelingData[index];
        await this.user_repository.pushOrPullStickers(
          this.userDataService.getUserId(),
          'feeling',
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
