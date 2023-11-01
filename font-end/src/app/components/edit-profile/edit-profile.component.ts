import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { UserRepository } from '../../models/userModel/user.repository';
import { UserDataService } from '../../services/user-data.service';
import { ProfileService } from '../../services/auth-user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent {
  user: any;
  id: any;
  username = '';
  email = '';
  password = '';
  kid_name = '';
  kid_age: number = 0;
  fakePassword = '********';

  constructor(
    private userRepository: UserRepository,
    private userDataService: UserDataService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.userRepository
      .getUserById(this.userDataService.getUserId())
      .subscribe((user) => {
        this.user = user;
        this.username = this.user.username;
        
        this.password = this.user.password;
        this.email = this.user.email;
        this.kid_name = this.user.kid_name;
        this.kid_age = this.user.kid_age;

        console.log(this.kid_name);
      });
  }

  cancelEdit(): void {
    this.profileService.updateShowEditProfile(false);
  }

  async confirmEdit(): Promise<void> {
    await Swal.fire({
      title: 'Are you sure you want to update your profile?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      input: 'password',
      inputLabel: 'Please enter your password',
      inputPlaceholder: 'Enter your password',
      confirmButtonText: 'Yes, update it',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
      confirmButtonColor: '#A1C554',
      cancelButtonColor: '#FC6F6F',
    }).then((userResult) => {
      if (userResult.isConfirmed) {
        if (userResult.value === this.password) {
          Swal.fire({
            title: 'Go to the board',
            icon: 'success',
            text: 'Success!',
            confirmButtonColor: '#A1C554',
          });

          this.updateProfile();
          this.profileService.updateShowEditProfile(false);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Incorrect',
            text: 'Please try again',
            confirmButtonColor: '#A1C554',
          });
        }
      }
    });
  }

  updateProfile() {
    const updatedUserDetails = {
      id: this.user.id,
      username: this.username,
      password: this.fakePassword,
      email: this.email,
      kid_name: this.kid_name,
      kid_age: this.kid_age,
    };
    this.userRepository.updateUserFields(
      this.userDataService.getUserId(),
      updatedUserDetails
    );
  }

}
