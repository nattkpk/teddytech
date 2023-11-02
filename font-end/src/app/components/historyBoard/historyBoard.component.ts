import { Component } from '@angular/core';
import { UserRepository } from 'src/app/models/userModel/user.repository';
import { UserDataService } from 'src/app/services/user-data.service';
import { StickerDataService } from 'src/app/services/sticker-data.service';
import Swal from 'sweetalert2';
import { ConnectionClosedEvent } from 'mongodb';

@Component({
  selector: 'historyBoard',
  templateUrl: './historyBoard.component.html',
  styleUrls: ['./historyBoard.component.css'],
})
export class HistoryBoard {
  constructor(
    private stickerService: StickerDataService,
    private user_repository: UserRepository,
    private userDataService: UserDataService,
    private sticker_service: StickerDataService
  ) {
  }


  ngOnInit() {
    // Fetch the user data when the component initializes
    this.user_repository
      .getUserById(this.userDataService.getUserId())
      .subscribe((user) => {
        console.log('User Data:', user);
        this.user = user;

        this.activityBg = this.user.activityTheme.bg;
        this.activity_fontColor = this.user.activityTheme.font;
        this.rewardBg = this.user.rewardTheme.bg;
        this.reward_fontColor = this.user.rewardTheme.font;

        
        this.activity_sticked = this.user.stickerHistory[this.stickerService.getHistoryIndex()].activitySticked;

        

        this.tue_sticked = this.user.stickerHistory[this.stickerService.getHistoryIndex()].monSticked;
        this.wed_sticked = this.user.stickerHistory[this.stickerService.getHistoryIndex()].tueSticked;
        this.thu_sticked = this.user.stickerHistory[this.stickerService.getHistoryIndex()].wedSticked;
        this.fri_sticked = this.user.stickerHistory[this.stickerService.getHistoryIndex()].thuSticked;
        this.sat_sticked = this.user.stickerHistory[this.stickerService.getHistoryIndex()].friSticked;
        this.mon_sticked = this.user.stickerHistory[this.stickerService.getHistoryIndex()].satSticked;
        this.sun_sticked = this.user.stickerHistory[this.stickerService.getHistoryIndex()].sunSticked;
        this.reward_sticked = this.user.stickerHistory[this.stickerService.getHistoryIndex()].rewardSticked;

        this.startDate = this.user.stickerHistory[this.stickerService.getHistoryIndex()].startDate;
        this.endDate = this.user.stickerHistory[this.stickerService.getHistoryIndex()].endDate;

        this.pointA = this.user.stickerHistory[this.stickerService.getHistoryIndex()].rewardA.point;
        this.pointB = this.user.stickerHistory[this.stickerService.getHistoryIndex()].rewardB.point;
        this.collectedPoint = this.user.stickerHistory[this.stickerService.getHistoryIndex()].allpoint;
        this.note = this.user.stickerHistory[this.stickerService.getHistoryIndex()].note;
      });
  }

  note:string = '';
  addBg = '';
  activityBg: string = '';
  activity_fontColor: string = '';
  rewardBg:string = '';
  reward_fontColor:string = '';

  startDate:string = '';
  endDate:string = '';

  user: any | null = {};

  activity_sticked: any[] = [];

  mon_sticked: any[] = [];
  tue_sticked: any[] = [];
  wed_sticked: any[] = [];
  thu_sticked: any[] = [];
  fri_sticked: any[] = [];
  sat_sticked: any[] = [];
  sun_sticked: any[] = [];

  reward_sticked: any[] = [];
  pointA: number = 0;
  pointB:number = 0;
  collectedPoint:number = 0;


}