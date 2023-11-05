import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ProfileService } from '../../services/auth-user.service';
import { UserRepository } from '../../models/userModel/user.repository';
import { UserDataService } from 'src/app/services/user-data.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  showEditProfile: boolean = false;
  determinate1: number = 0;
  determinate2: number = 0;
  targetValue1: number = 60;
  targetValue2: number = 80;
  

  constructor(
    private userRepository: UserRepository,
    private profileStateService: ProfileService,
    private userDataService: UserDataService
  ) {}
  user: any = {};
  img: any = '';
  username: string = '';
  password: string = '';
  email: string = '';
  kid_name: string = '';
  activityPoint: any[] = [];

  kid_age: number = 0;
  activitiesCount = 0;
  stickersCount = 0;
  stickersPoint = 0;
  rewardCount = 0;

  ngOnInit(): void {
    // Fetch the user data when the component initializes
    this.userRepository
      .getUserById(this.userDataService.getUserId())
      .subscribe((user) => {
        this.user = user;
        this.username = this.user.username;
        this.password = this.user.password;
        this.img = this.user.imgProfile;
        this.email = this.user.email;
        this.kid_age = this.user.kid_age;
        this.kid_name = this.user.kid_name;
        this.activityPoint = this.user.activitySticked;
        this.stickersPoint = this.user.currentPoint;
        const totalStickers = [
          ...this.user.sunSticked,
          ...this.user.monSticked,
          ...this.user.tueSticked,
          ...this.user.wedSticked,
          ...this.user.thuSticked,
          ...this.user.friSticked,
          ...this.user.satSticked,
        ];

        this.activitiesCount = this.activityPoint.filter(
          (a: any) => a.imageUrl && a.imageUrl.trim() !== ''
        ).length;

        this.stickersCount = totalStickers.filter(
          (sticker) => sticker.icon && sticker.icon !== ''
        ).length;

        console.log(this.img);

        this.createChart();
        
      });

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
      title: 'Board Full',
      text: 'Your board is full. Please subscribe to add more boards.',
      icon: 'error',
    });
  }

  createChart() {
  
  }


  
}

 


  

