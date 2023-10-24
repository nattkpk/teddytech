import { Injectable } from '@angular/core';
import { User } from './user.model';
import { userStaticData } from './user_static_data';

@Injectable()
export class UserRepository {
  private users: User[] = [];

  constructor(private dataSource: userStaticData) {}
  ngOnInit() {
        this.dataSource.getUsers().subscribe((data) => {
        this.users = data;
    });
  }

  //get by ID
  getUserById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
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
