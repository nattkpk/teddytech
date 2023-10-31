import { Component } from '@angular/core';
import { UserRepository } from 'src/app/models/userModel/user.repository';
import { UserDataService } from 'src/app/services/user-data.service';
import { StickerDataService } from 'src/app/services/sticker-data.service';
import Swal from 'sweetalert2';
import { ConnectionClosedEvent } from 'mongodb';

@Component({
  selector: 'saveBoard',
  templateUrl: './saveBoard.component.html',
  styleUrls: ['./saveBoard.component.css'],
})
export class SaveBoard {
  constructor(
    private user_repository: UserRepository,
    private userDataService: UserDataService,
    private sticker_service: StickerDataService
  ) {
    this.currentWeek = '';
    this.initializeWeek();
    this.note = '';
  }

  note: string;
  currentWeek: string;

  initializeWeek() {
    // Get the current date
    const currentDate = new Date();

    // Calculate the week number based on the date
    const januaryFirst = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor(
      (currentDate.getTime() - januaryFirst.getTime()) / (24 * 60 * 60 * 1000)
    );
    const currentWeek = Math.ceil((days + januaryFirst.getDay() + 1) / 7);

    // Format the year and week as "yyyy-Www"
    this.currentWeek = `${currentDate.getFullYear()}-W${currentWeek
      .toString()
      .padStart(2, '0')}`;
  }

  saveAlert() {
    // Swal.fire({
    //   title: 'Save this week?',
    //   text: 'All sticker on board will be clear , are you sure? ',
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonText: 'Yes !',
    //   cancelButtonText: 'cancel !',
    //   reverseButtons: true,
    //   confirmButtonColor: '#A1C554',
    //   cancelButtonColor: '#FC6F6F',
    // })
  }
}
