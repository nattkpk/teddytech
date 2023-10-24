import { Injectable } from '@angular/core';
import { User } from './user.model';
import { userStaticData } from './user_static_data';
import { UserDataService } from 'src/app/services/user-data.service';
import Swal from 'sweetalert2';

@Injectable()
export class UserRepository {
  private users: User[] = [];

  constructor(private dataSource: userStaticData,private userDataService: UserDataService) {}
  ngOnInit() {
        this.dataSource.getUsers().subscribe((data) => {
        this.users = data;
    });
  }

  //get by ID
  getUserById(id: string): User | null {
    const user = this.users.find((user) => user.id === id);
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
