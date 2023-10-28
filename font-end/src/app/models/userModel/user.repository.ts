import { Injectable } from '@angular/core';
import { User } from './user.model';
import { userStaticData } from './user_static_data';
import { UserDataService } from 'src/app/services/user-data.service';
import { ApiData } from 'src/app/services/apidata.service';
import Swal from 'sweetalert2';
import { Observable, map } from 'rxjs';

@Injectable()
export class UserRepository {
  private users: User[] = [];

  constructor(
    private dataSource: userStaticData,
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
  

  //get all users
  getAllUsers(): User[] {
    return this.users;
  }

  // updateUser(id: string, updatedUser: User): boolean {
  //   const index = this.users.findIndex((user) => user.id === id);
  //   if (index !== -1) {
  //     this.users[index] = updatedUser;
  //     return true;
  //   }
  //   return false;
  // }

  // deleteUser(id: string): boolean {
  //   const index = this.users.findIndex((user) => user.id === id);
  //   if (index !== -1) {
  //     this.users.splice(index, 1);
  //     return true;
  //   }
  //   return false;
  // }

  // addUser(user: User): void {
  //     this.users.push(user);
  //     }
}
