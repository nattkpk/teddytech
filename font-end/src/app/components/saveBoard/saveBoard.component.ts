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
  ) {}

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
