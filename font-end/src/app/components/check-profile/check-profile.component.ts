import { Component, OnInit } from '@angular/core';
import { UserRepository } from '../../models/userModel/user.repository';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-check-profile',
  templateUrl: './check-profile.component.html',
  styleUrls: ['./check-profile.component.css']
})
export class CheckProfileComponent implements OnInit {
  username: boolean = false;
  user: any = {};

  constructor(
    private userRepository: UserRepository,
    private userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    this.checkUserStatus();
  }
  
  checkUserStatus() {
    const userId = this.userDataService.getUserId();
  
    if (userId) {
      this.userRepository.getUserById(userId).subscribe((user) => {
        this.user = user;
        this.username = !!this.user?.username;
      });
    }
  }
}
