import { Component } from '@angular/core';
import { StickerDataService } from 'src/app/services/sticker-data.service';

@Component({
  selector: 'board-howTo',
  templateUrl: './board-howTo.component.html',
  styleUrls: ['./board-howTo.component.css']
})
export class BoardHowTo {

    constructor(
        private service: StickerDataService
        ){

    }

    slides = [
        { image: '../../../assets/img/tutorail/Tutorial1.gif' },
        { image: '../../../assets/img/tutorail/Tutorial2.gif' },
        { image: '../../../assets/img/tutorail/Tutorial3.gif' },
        { image: '../../../assets/img/tutorail/Tutorial4.gif' },
        { image: '../../../assets/img/tutorail/Tutorial5.gif' },
      ];

// ------------------------------------ Show tutorial-----------------------------------------------
  close(){
    this.service.setshowtutorial(false);
  }

  isChecked: boolean = false;

//   checkshowAgain(){
    
//   }

}
