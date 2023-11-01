import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ThemePalette } from '@angular/material/core';
import {ProfileService} from '../../services/profile.service'
import { UserRepository } from '../../models/userModel/user.repository';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  showEditProfile: boolean = false;
  determinate1: number = 0;
  determinate2: number = 0;
  targetValue1: number = 80;
  targetValue2: number = 80;
  color: ThemePalette = 'primary';

  constructor(
    private userRepository: UserRepository,
    private profileStateService: ProfileService,
    ) {}

  ngOnInit(): void {
    this.profileStateService.showEditProfile$.subscribe((showEditProfile) => {
      this.showEditProfile = showEditProfile;
    });
    setInterval(() => {
      this.determinate1 = this.targetValue1;
    }, 500);
    setInterval(() => {
      this.determinate2 = this.targetValue2;
    }, 600);
  }

  editProfile(): void {
    this.profileStateService.updateShowEditProfile(true); 
  }

  addNewBoard() {

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
