import { Component } from '@angular/core';
import { UserRepository } from 'src/app/models/userModel/user.repository';
import { UserDataService } from 'src/app/services/user-data.service';
import Swal from 'sweetalert2';
import { infoSave } from 'src/app/models/userModel/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'saveBoard',
  templateUrl: './saveBoard.component.html',
  styleUrls: ['./saveBoard.component.css'],
})
export class SaveBoard {
  constructor(
    private router: Router,
    private user_repository: UserRepository,
    private userDataService: UserDataService
  ) {
    this.selectedWeek = '';
    this.initializeWeek();
    this.note = '';
    this.historyData = [];
  }

  ngOnInit() {
    // Fetch the user data when the component initializes
    this.user_repository
      .getUserById(this.userDataService.getUserId())
      .subscribe((user) => {
        console.log('User Data:', user);
        this.user = user;

        this.newHistory.activitySticked = this.user.activitySticked;
        this.newHistory.sunSticked = this.user.sunSticked;
        this.newHistory.monSticked = this.user.monSticked;
        this.newHistory.tueSticked = this.user.tueSticked;
        this.newHistory.wedSticked = this.user.wedSticked;
        this.newHistory.thuSticked = this.user.thuSticked;
        this.newHistory.friSticked = this.user.friSticked;
        this.newHistory.satSticked = this.user.satSticked;
        this.newHistory.feelingSticked = this.user.feelingSticked;
        this.newHistory.rewardSticked = this.user.rewardSticked;
        this.newHistory.praiseSticked = this.user.praiseSticked;

        this.newHistory.rewardA.point = this.user.pointA;
        this.newHistory.rewardB.point = this.user.pointB;
        this.newHistory.rewardA.rewardName = this.user.reward_sticked[0].text;
        this.newHistory.rewardB.rewardName = this.user.reward_fontColor[1].text;
        this.newHistory.allpoint = this.user.currentPoint;
        this.newHistory.note = this.note;

        this.historyData = this.user.stickerHistory;
        this.initializeWeek();
      });
  }

  user: any | null = {};

  note: string;
  selectedWeek: string;
  newHistory: infoSave = {
    startDate: '',
    endDate: '',
    note: '',
    allpoint: 0,
    rewardA: { rewardName: '', point: 0 },
    rewardB: { rewardName: '', point: 0 },
    sunSticked: [],
    monSticked: [],
    tueSticked: [],
    wedSticked: [],
    thuSticked: [],
    friSticked: [],
    satSticked: [],
    activitySticked: [],
    praiseSticked: [],
    feelingSticked: [],
    rewardSticked: [],
  };

  initializeWeek() {
    const currentDate = new Date();
    const januaryFirst = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor(
      (currentDate.getTime() - januaryFirst.getTime()) / (24 * 60 * 60 * 1000)
    );
    const selectedWeek = Math.ceil((days + januaryFirst.getDay() + 1) / 7);
    this.selectedWeek = `${currentDate.getFullYear()}-W${selectedWeek
      .toString()
      .padStart(2, '0')}`;
  }

  setDate() {
    const [year, week] = this.selectedWeek.split('-W');
    const yearNumber = parseInt(year, 10);
    const weekNumber = parseInt(week, 10);

    const startDay = 1 + (weekNumber - 1) * 7;
    const endDay = startDay + 6;

    const startDate = new Date(yearNumber, 0, startDay);
    const endDate = new Date(yearNumber, 0, endDay);

    const dayOfWeek = startDate.getDay();
    const daysToMonday = dayOfWeek === 0 ? 1 : 7 - dayOfWeek;

    startDate.setDate(startDate.getDate() + daysToMonday);
    endDate.setDate(endDate.getDate() + daysToMonday);

    this.convertDateToString(startDate, endDate);
  }

  convertDateToString(strat: Date, end: Date) {
    const sDate = strat.toString();
    const sdateParts = sDate.split(' ');
    const sformattedDate = sdateParts.slice(0, 4).join(' ');

    const eDate = end.toString();
    const edateParts = eDate.split(' ');
    const eformattedDate = edateParts.slice(0, 4).join(' ');

    this.newHistory.startDate = sformattedDate;
    this.newHistory.endDate = eformattedDate;
  }

  historyData: any[];

  updatehistoryData() {
    const updatedHistoryData = {
      stickerHistory: this.historyData,
    };
    this.user_repository.updateUserFields(
      this.userDataService.getUserId(),
      updatedHistoryData
    );
  }
  sun_sticked = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];
  mon_sticked = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];
  tue_sticked = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];
  wed_sticked = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];
  thu_sticked = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];
  fri_sticked = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];
  sat_sticked = [
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' },
  ];

  reward_Sticked = [
    {
      text: '',
      imageUrl: '',
    },
    {
      text: '',
      imageUrl: '',
    },
  ];

  feeling_Sticked = [{ text: '' }, { text: '' }, { text: '' }];

  praise_Sticked = [{ text: '' }, { text: '' }, { text: '' }];

  activity_Sticked = [
    {
      text: '',
      imageUrl: '',
    },
    {
      text: '',
      imageUrl: '',
    },
    {
      text: '',
      imageUrl: '',
    },
    {
      text: '',
      imageUrl: '',
    },
    {
      text: '',
      imageUrl: '',
    },
  ];

  clearBoard() {
    const updatedUserData = {
      activitySticked: this.activity_Sticked,
      praiseSticked: this.praise_Sticked,
      feelingSticked: this.feeling_Sticked,
      rewardSticked: this.reward_Sticked,
      sunSticked: this.sun_sticked,
      monSticked: this.mon_sticked,
      tueSticked: this.tue_sticked,
      wedSticked: this.wed_sticked,
      thuSticked: this.thu_sticked,
      friSticked: this.fri_sticked,
      satSticked: this.sat_sticked,
      currentPoint: 0
    };
    this.user_repository.updateUserFields(
      this.userDataService.getUserId(),
      updatedUserData
    );
  }

  saveAlert() {
    this.setDate();
    this.newHistory.note = this.note;
    this.historyData = this.user.stickerHistory;
    this.historyData.push(this.newHistory);
    Swal.fire({
      title: 'Save this week?',
      text: 'All sticker on board will be clear , are you sure? ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes !',
      cancelButtonText: 'cancel !',
      reverseButtons: true,
      confirmButtonColor: '#A1C554',
      cancelButtonColor: '#FC6F6F',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          console.log(this.historyData);
          this.updatehistoryData();

          await Swal.fire({
            icon: 'success',
            title: 'Create Success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#A1C554',
          });
        } catch (error) {
          console.error(error);
        }
        this.clearBoard();
        this.router.navigate(['/board']);
      }
    });
  }
}
