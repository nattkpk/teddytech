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
    this.selectedgenre = "Point";
  }

  dropSticker(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } 
  }
  
  addBg = ''



  activityBg = '../../../assets/img/BgSticker/Diamon4.png'
  dataArray = ["ข้อความ1" , "ข้อความ2"];
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

  stickertext = ''
  stickericon = ''
  
  // addActivity(){
  //   this.activity_sticked.unshift({
  //     text: this.stickertext,
  //     imageUrl: this.stickericon,
  //   },)
  //   this.activity_sticked.pop()
  // } 

  addActivity(){
    for(let i = 0 ; i<this.activity_sticked.length ; i++){
      if(!this.activity_sticked[i].imageUrl){
        this.activity_sticked[i] = { text: this.stickertext,imageUrl: this.stickericon,};
        break;
      }
    }
  } 
  
  deleteActivity(index: number): void {
    if (index >= 0 && index < this.activity_sticked.length) {
        this.activity_sticked[index] = { text: '' };
    }
  }


  // deleteByIndex(indexToDelete: number ,array: any[]): void {
  //   if (indexToDelete >= 0 && indexToDelete < array.length) {
  //     array.splice(indexToDelete, 1);
  //   }
  // }

  
  pointData: any[] = [
    {
      icon: '../../../assets/img/PointSticker/Icon/heart.png',
      bgImage: '../../../assets/img/PointSticker/Bg/Bgpoint1.png',
    },
    {
      icon: '../../../assets/img/PointSticker/Icon/star.png',
      bgImage: '../../../assets/img/PointSticker/Bg/Bgpoint2.png',
    },
    {
      icon: '../../../assets/img/PointSticker/Icon/shooting-star.png',
      bgImage: '../../../assets/img/PointSticker/Bg/Bgpoint3.png',
    },
  ]

  sun_sticked: any[] = [
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''},
  ];
  mon_sticked: any[] = [
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''},
  ];
  tue_sticked: any[] = [
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''},
  ];
  wed_sticked: any[] = [
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''},
  ];
  thu_sticked: any[] = [
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''},
  ];
  fri_sticked: any[] = [
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''},
  ];
  sat_sticked: any[] = [
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''},
    {text: ''},
  ];

 

  point_bg = ''
  point_icon = ''
  
  day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  currentday = 0;

  addPoint(){
      switch (this.currentday) {
        case 0:
          for(let i = 0 ; i<this.sun_sticked.length ; i++){
            if(!this.sun_sticked[i].icon){
              this.sun_sticked[i] = { icon: this.point_icon,bgImage: this.point_bg,};
              break;
            }
          }
            break;
        case 1:
          for(let i = 0 ; i<this.mon_sticked.length ; i++){
            if(!this.mon_sticked[i].icon){
              this.mon_sticked[i] = { icon: this.point_icon,bgImage: this.point_bg,};
              break;
            }
          }
            break;
    }
    
  }

  change_day_plus() {
    if (this.currentday < this.day.length-1) {
      this.currentday++;
    } else {
      this.currentday = 0;
    }
  }

  change_day_minus() {
    if (this.currentday > 0) {
      this.currentday--;
    } else {
      this.currentday = this.day.length-1;
    }
  }

}
