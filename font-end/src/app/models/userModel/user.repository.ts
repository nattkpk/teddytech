import { Injectable } from '@angular/core';
import { User } from './user.model';
// import { userStaticData } from './user_static_data';
import { UserDataService } from 'src/app/services/user-data.service';
import { ApiData } from 'src/app/services/apidata.service';
import Swal from 'sweetalert2';
import { Observable, map } from 'rxjs';

@Injectable()
export class UserRepository {
  private users: User[] = [];

  constructor(
    // private dataSource: userStaticData,
    private userDataService: UserDataService,
    private apiData : ApiData
  ) {
    this.apiData.getUsers().subscribe(users => {
      this.users = users;
    });
    // this.dataSource.getUsers().subscribe((data) => {
    //   this.users = data;
    // });
  }
  
  //get all users
  getAllUsers(): User[] {
    return this.users;
  }

  //get by ID
  getUserById(id: string): Observable<User | null> {
    return this.apiData.getUserById(id).pipe(
      map((user) => {
        if (user) {
          this.userDataService.setUserId(id);
          return user;
        } else {
          Swal.fire({
            icon: 'error',
            title: 'User Not Found',
          });
          return null;
        }
      })
    );
  }

  pushOrPullStickers(userId: string, arrayName: string, action: string, arrayItem: any): void {
    this.apiData.updateStickers(userId, arrayName, action, arrayItem).subscribe(
      (response) => {
        console.log('Updated user data:', response);
      },
      (error) => {
        console.error('Error updating stickers:', error);
      }
    );
  }

  updateUserFields(userId: string, updatedUserData: any) {
    this.apiData.updateUserFields(userId, updatedUserData).subscribe(
      (updatedUser) => {
        console.log('User data updated:', updatedUser);
      },
      (error) => {
        console.error('Error updating user data:', error);
      }
    );
  }
  

 

}
