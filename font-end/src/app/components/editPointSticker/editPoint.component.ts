import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { PointSticker} from 'src/app/models/userModel/user.model';
import { UserRepository } from 'src/app/models/userModel/user.repository';
import { UserDataService } from 'src/app/services/user-data.service';
import { StickerDataService } from 'src/app/services/sticker-data.service';
import Swal from 'sweetalert2';
import { ConnectionClosedEvent } from 'mongodb';

@Component({
  selector: 'editPoint',
  templateUrl: './editPoint.component.html',
  styleUrls: ['./editPoint.component.css'],
})
export class EditPoint {
  constructor(
    private user_repository: UserRepository,
    private userDataService: UserDataService,
    private sticker_service: StickerDataService
  ) {
    this.itemsPerPage = 13;
    this.currentPage = 1;
    this.createStickerOn1 = false;
    this.createStickerOn2 = false;


    this.pointIcon = this.sticker_service.getAllPointIcon();
    this.pointBg = this.sticker_service.getAllPointBg();
  }

  ngOnInit() {
    // Fetch the user data when the component initializes
    this.user_repository
      .getUserById(this.userDataService.getUserId())
      .subscribe((user) => {
        this.user = user;
        this.pointData =  this.user.stickers.point;

        this.praise_data = this.user?.stickers?.praise
        this.feelingData = this.user?.stickers?.feeling
        this.rewardData = this.user?.stickers?.reward
        this.activityData = this.user?.stickers?.activity
      });
  }

  itemsPerPage: number = 13;
  currentPage: number = 1;

  createStickerOn1: boolean = false;
  createStickerOn2: boolean = false;

  user: any | null = {};

  pointData: any[] = [];
  activityData: any[] = [];
  praise_data: any[] = [];
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
        praise: this.praise_data,
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

  getPointDataForPage(page: number): any[] {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.pointData.slice(startIndex, endIndex);
  }

  changePage(offset: number): void {
    this.currentPage += offset;
  }

  get totalNumberOfPointPages(): number {
    return Math.ceil(this.pointData.length / this.itemsPerPage);
  }

  

  //-------------------------------- create sticker ----------------------------
  pointIcon: any[];
  pointBg: any[];

  numOfPoint: number = 1;
  selectedIconIndex: number = -1;
  currentIconPage: number = 1;
  itemsIconPerPage: number = 18;
  newPointSticker: PointSticker = { icon: '', bgImage: '' , point:0};
  chooseIcon:  number = -1;

  create_stickerOnOff1() {
    this.createStickerOn1 = this.createStickerOn1 ? false : true;
  }

  create_stickerOnOff2() {
    this.createStickerOn2 = this.createStickerOn2 ? false : true;
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
    return Math.ceil(this.pointIcon.length / this.itemsIconPerPage);
  }

  getIconDataForPage(page: number): any[] {
    const startIndex = (page - 1) * this.itemsIconPerPage;
    const endIndex = startIndex + this.itemsIconPerPage;
    return this.pointIcon.slice(startIndex, endIndex);
  }


  //  ---------------------- create page2 ---------------------

  selectedBgIndex: number = -1;
  currentBgPage: number = 1;
  itemsBgPerPage: number = 14;
  chooseBg: number =-1;

  selectBg(index: number) {
    this.chooseBg = index+((this.currentBgPage-1)*this.itemsBgPerPage)
    this.selectedBgIndex = index;
  }

  isBgSelected(index: number) {
    return this.selectedBgIndex === index;
  }

  changeBgPage(offset: number): void {
    this.currentBgPage += offset;
  }

  get totalNumberOfBgPages(): number {
    return Math.ceil(this.pointBg.length / this.itemsBgPerPage);
  }

  getBgDataForPage(page: number): any[] {
    const startIndex = (page - 1) * this.itemsBgPerPage;
    const endIndex = startIndex + this.itemsBgPerPage;
    return this.pointBg.slice(startIndex, endIndex);
  }
  // ------------------

  next(){
    console.log("Point:",this.numOfPoint);
    this.create_stickerOnOff1();
    this.create_stickerOnOff2();
  }

  isInteger(value: number): boolean {
    return /^\d+$/.test(value.toString());
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
      if (!(this.isInteger(this.numOfPoint))) {
        Swal.fire({
          icon: 'error',
          title: 'Please enter integer',
          text: 'Try again',
          confirmButtonColor: '#A1C554',
        });
        return;
      }else if (this.numOfPoint > 0 && this.numOfPoint <= 10 && this.chooseIcon !== -1 && this.chooseBg !== -1) {
        console.log('Point: ' + this.numOfPoint);
        this.newPointSticker.bgImage = this.pointBg[this.chooseBg];
        this.newPointSticker.icon = this.pointIcon[this.chooseIcon];
        this.newPointSticker.point = this.numOfPoint;

        try {
          await this.user_repository.pushOrPullStickers(
            this.userDataService.getUserId(),
            'point',
            'push',
            this.newPointSticker
          );
  
          await Swal.fire({
            icon: 'success',
            title: 'Create Success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#A1C554',
          });
  
          this.create_stickerOnOff2();
          this.reloadpage();
        } catch (error) {
          // Handle any errors that might occur during the operations
          console.error(error);
        }
      } else {
        if (this.numOfPoint <=0 || this.numOfPoint > 10) {
          await Swal.fire({
            icon: 'warning',
            title: 'Please enter point 1 - 10',
            confirmButtonText: 'OK',
            confirmButtonColor: '#A1C554',
          });
        }  else if (this.chooseIcon === -1) {
          await Swal.fire({
            icon: 'warning',
            title: 'Please select point icon',
            confirmButtonText: 'OK',
            confirmButtonColor: '#A1C554',
          });
        } else if (this.chooseBg === -1) {
          await Swal.fire({
            icon: 'warning',
            title: 'Please select point background',
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
  
        const pulledSticker = this.pointData[index];
        await this.user_repository.pushOrPullStickers(
          this.userDataService.getUserId(),
          'point',
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
