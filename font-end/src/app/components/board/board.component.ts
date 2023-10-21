import { CdkDragDrop, CdkDragStart, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Component } from "@angular/core";
import { Sticker1 } from "src/app/models/stickerModel/sticker.model";

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class Board {

  selectedgenre: string;
  dataRows = new Array(5).fill({});

  constructor() {
    this.selectedgenre = "Activity";
  }


  a=1
  activityBg = '../../../assets/img/BgSticker/Diamon4.png'
  addActivityBg = ''


  dataArray = ["ข้อความ1" , "ข้อความ2"];

  
  // activity_space = new Array(5);
  activity_sticked: any[] = [
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''},
  ];
  
  activityData: any[] = [
    {
      text: 'Take a Shower',
      imageUrl: '../../../assets/img/ActivityIcon/shower.png',
    },
    {
      text: 'Help to water the plant',
      imageUrl: '../../../assets/img/ActivityIcon/watering-plants.png',
    },
    {
      text: 'Brush teeth',
      imageUrl: '../../../assets/img/ActivityIcon/tooth-brush.png',
    },
    {
      text: 'Make the bed',
      imageUrl: '../../../assets/img/ActivityIcon/make-the-bed.png',
    },
    {
      text: 'Drink milk',
      imageUrl: '../../../assets/img/ActivityIcon/milk-box.png',
    },
    {
      text: 'Wash your hands',
      imageUrl: '../../../assets/img/ActivityIcon/wash-your-hands.png',
    },
  ];

  getClassForActivity(item: any): string {
    // Your logic to determine the class based on item's properties
    // For example, check if imageUrl is present
    return item && item.imageUrl ? 'sticker' : 'stickArea activity-stick';
  }
  
  // dropActivitySticker(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.activityData, event.previousIndex, event.currentIndex);
  // }

  dropActivitySticker(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } 
    //else {
    //   this.deleteByIndex(event.currentIndex,this.activity_sticked)
    //   transferArrayItem(
    //     event.previousContainer.data,
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex,
    //   );
      
    // }
  }

  stickertext = ''
  stickericon = ''
  addActicity(){
    this.activity_sticked.unshift({
      text: this.stickertext,
      imageUrl: this.stickericon,
    },)
    this.activity_sticked.pop()
  }


  deleteByIndex(indexToDelete: number ,array: any[]): void {
    if (indexToDelete >= 0 && indexToDelete < array.length) {
      array.splice(indexToDelete, 1);
    }
  }

  
}
