import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { PointSticker} from 'src/app/models/userModel/user.model';
import { UserRepository } from 'src/app/models/userModel/user.repository';
import { UserDataService } from 'src/app/services/user-data.service';
import { StickerDataService } from 'src/app/services/sticker-data.service';
import Swal from 'sweetalert2';
import { ConnectionClosedEvent } from 'mongodb';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class History {
  constructor(
    private user_repository: UserRepository,
    private userDataService: UserDataService,
    private sticker_service: StickerDataService
  ) {}


}
