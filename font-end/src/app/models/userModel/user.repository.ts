import { Injectable } from '@angular/core';
import { User } from './user.model';
import { userStaticData } from './user_static_data';
import { UserDataService } from 'src/app/services/user-data.service';
import { ApiData } from 'src/app/services/apidata.service';
import Swal from 'sweetalert2';
import { Observable, map } from 'rxjs';

@Injectable()
export class UserRepository {
  private users: any[] = [];

  constructor(
    private userDataService: UserDataService,
    private apiData: ApiData
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
      (u) => u.username === username && u.password === password
      
    );
   

    if (user) {
      this.userDataService.setUserId(user._id)
      return true;
    } else {
      return false;
    }
  }

  registerUser(
    username: string,
    email: string,
    password: string,
    checkPassword: string,
    kid_name: string,
    kid_age: number
  ){
    if (!username || !email || !password || !checkPassword) {
    return false; 
  }
    const userExists = this.users.find((u) => u.username === username);
    if (userExists || password !== checkPassword) {
      return false;
    }

    const newUser = {
      username: username,
      imgProfile:
        'https://images.pexels.com/photos/7211201/pexels-photo-7211201.jpeg?auto=compress&cs=tinysrgb&w=1200',
      email: email,
      password: password,
      // kid_name: kid_name,
      // kid_age: kid_age,
    };

    console.log('New User Details:', newUser);

    this.apiData.registerUser(newUser).subscribe(
      (response) => {
        console.log('User registered:', response);
      },
      (error) => {
        console.error('User registration failed:', error);
      }
    );

    return true;
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
