import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Component } from "@angular/core";

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class Board {

  selectedgenre: string;

  constructor() {
    this.selectedgenre = "Activity";
  }


  imgUrl = '../../../assets/img/BgSticker/Diamon2.png'


  dataArray = ["ข้อความ1" , "ข้อความ2"];

  dataArray2 = [
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
  ];

  
}
