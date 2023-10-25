import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { User } from 'src/app/models/userModel/user.model';
import { UserRepository } from 'src/app/models/userModel/user.repository';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'editActivity',
  templateUrl: './editActivity.component.html',
  styleUrls: ['./editActivity.component.css'],
})
export class EditActivity {
  constructor(
    private user_repository: UserRepository,
    private userDataService: UserDataService
  ) {
    this.activityData = this.user?.stickers?.activity
      ? this.user.stickers.activity
      : [];
  }

  itemsPerPage: number = 13;
  currentPage: number = 1;

  activityBg = '../../../assets/img/BgSticker/Diamon4.png';
  activity_fontColor = 'black';
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

  changePage(offset: number): void {
    this.currentPage += offset;
  }

  getActivityDataForPage(page: number): any[] {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.activityData.slice(startIndex, endIndex);
  }

  get totalNumberOfActivityPages(): number {
    return Math.ceil(this.activityData.length / this.itemsPerPage);
  }
}
