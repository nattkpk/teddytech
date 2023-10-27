import { Injectable } from '@angular/core';
import { User } from './user.model';
import { userStaticData } from './user_static_data';
import { UserDataService } from 'src/app/services/user-data.service';
import Swal from 'sweetalert2';

@Injectable()
export class UserRepository {
  private users: User[] = [];

  constructor(
    private dataSource: userStaticData,
    private userDataService: UserDataService
  ) {
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

  loginUser(username: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      this.getUserById(user.id);
      return true;
    } else {
      return false;
    }
  }

  // registerUser(
  //   username: string,
  //   email: string,
  //   password: string,
  //   checkPassword: string,
  //   kid_name: string,
  //   kid_age: number
  // ): boolean {
    
  //   const userExists = this.users.some((u) => u.username === username);
  
  //   if (userExists) {
  //     return false; 
  //   }
  
  //   if (password !== checkPassword) {
  //     return false; 
  //   }
  
  //   const randomId = function(length = 6) {
  //     return Math.random().toString(36).substring(2, length+2);
  //   };
  //   const newUser = {
  //     id: randomId,
  //     username: username,
  //     email: email,
  //     password: password,
  //     kid_name: kid_name,
  //     kid_age: kid_age,
  //     stickers: {
  //       activity: [],
  //       praise: [],
  //       feeling: [],
  //       point: [],
  //       reward: []
  //     }
  //   };
  
  //   this.users.push(newUser);
  
  //   return true; 
  // }
  

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
