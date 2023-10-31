import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  showEditProfile: boolean = false;
  determinate1: number = 0;
  targetValue1: number = 80;
  determinate2: number = 0;
  targetValue2: number = 80;


  constructor() { }

  async ngOnInit(): Promise<void> {
    await setInterval(() => {
      this.determinate1 = this.targetValue1;
    }, 500);
    await setInterval(() => {
      this.determinate2 = this.targetValue2;
    }, 600);
  }


  editProfile() {
    Swal.fire({
      title: 'Clear feeling sticker on the board',
      text: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes !',
      cancelButtonText: 'cancel !',
      reverseButtons: true,
      confirmButtonColor: '#A1C554',
      cancelButtonColor: '#FC6F6F',
    });

   

    




  }
}
