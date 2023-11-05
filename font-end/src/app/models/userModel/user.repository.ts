import { Injectable } from '@angular/core';
import { User } from './user.model';
import { UserDataService } from 'src/app/services/user-data.service';
import { ApiData } from 'src/app/services/apidata.service';
import Swal from 'sweetalert2';
import { Observable, map } from 'rxjs';
import { PackUser } from './user.packUser';

@Injectable()
export class UserRepository {
  private users: any[] = [];

  constructor(
    private userDataService: UserDataService,
    private apiData: ApiData,
    private newUserData: PackUser
  ) {
    this.apiData.getUsers().subscribe((users) => {
      this.users = users;
    });
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

  pushOrPullStickers(
    userId: string,
    arrayName: string,
    action: string,
    arrayItem: any
  ): void {
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

  loginUser(username: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.username == username && u.password == password
    );
    if (user) {
      this.userDataService.setUserId(user._id);
      return true;
    } else {
      console.log('Error : User Non-found');

      return false;
    }
  }

  registerUser(
    startPack: number,
    username: string,
    email: string,
    password: string,
    checkPassword: string,
    kid_name: string,
    kid_age: number
  ) {
    if (!username || !email || !password || !checkPassword) {
      console.log('Error : Please enter a username email password and check password');
      return false;
    }
    const userExists = this.users.find((u) => u.username === username);
    if (userExists) {
      console.log('Error : userExists');
      return false;
    }
    if(password !== checkPassword){
      console.log('Error : incoorect');
      return false;
    }

    let newUser = this.newUserData.packUsers[startPack]
    newUser.username = username;
    newUser.email = email;
    newUser.password = password;
    newUser.kid_name = kid_name;
    newUser.kid_age = kid_age;

   
      

    this.apiData.registerUser(newUser).subscribe(
      (response) => {
        console.log('User registered:', response);
      },
      (error) => {
        console.error('User registration failed:', error);
        return false;
      }
    );
    return true;
  }

  updateUser(id: string, updated: User, password: string) {
    const user = this.users.find((u) => u.password !== password);
    if (updated) {
      this.apiData.updateUserFields(user._id, updated).subscribe(
        (response) => {
          console.log('User updated:', response);
        },
        (error) => {
          console.error('User update failed:', error);
        }
      );
    } else {
      console.log('User update failed');
    }
  }

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
