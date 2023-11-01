import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ProfileService } from '../../services/profile.service';
import { UserRepository } from '../../models/userModel/user.repository';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent {
  id = '';
  newUsername = '';
  newEmail = '';
  newPassword = '';
  newKid_age = 0;

  constructor(
    private profileStateService: ProfileService,
    private userRepository: UserRepository
  ) {}

  cancelEdit(): void {
    this.profileStateService.updateShowEditProfile(false);
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
      const detail: any = {
        newUsername: this.newUsername,
        newEmail: this.newEmail,
        newPassword: this.newPassword,
        newKid_age: this.newKid_age,
      };

      const isDone = await this.userRepository.updateUser(
        this.id,
        detail,
        password
      );
    }
  }
}
