import { Component} from '@angular/core';
import Swal from 'sweetalert2';
import { UserRepository } from '../../models/userModel/user.repository';
import { UserDataService } from '../../services/user-data.service';
import {ProfileService} from '../../services/auth-user.service';
 
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent{
  user: any;
  id: any; 
  username = "";
  email="";
  password="";
  kid_age="";
 

  constructor(
    private userRepository: UserRepository,
    private userDataService: UserDataService,
    private profileService: ProfileService,
  ) {}

  ngOnInit() {
    // Fetch the user data when the component initializes
    this.userRepository.getUserById(this.userDataService.getUserId())
      .subscribe((user) => {
        this.user = user
        this.username = this.user.username;
        console.log(this.user)
        console.log(this.username);
      });
  }

  cancelEdit(): void {
    this.profileService.updateShowEditProfile(false);
  }

  async confirmEdit(): Promise<void> {
    const { value: password, isConfirmed } = await Swal.fire({
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
    });

    if (isConfirmed) {
     
  }
}

updateProfile(){
//   const detail: any = {
//     newUsername: this.newUsername,
//     newEmail: this.newEmail,
//     newPassword: this.newPassword,
//     newKid_age: this.newKid_age,
//   };

//   const isDone = await this.userRepository.updateUser(this.id, detail, password);

//   if (isDone) {
//     Swal.fire({
//       title: 'Profile Updated',
//       text: 'Your profile has been successfully updated.',
//       icon: 'success',
//       confirmButtonText: 'OK',
//       confirmButtonColor: '#A1C554',
//     });
//   } else {
//     Swal.fire({
//       title: 'Update failed',
//       text: 'There was an error updating your profile.',
//       icon: 'error',
//       confirmButtonText: 'OK',
//       confirmButtonColor: '#FC6F6F',
//     });
//   }
// }
}

  




}
