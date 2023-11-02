import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private userId! : string;
  private userIdKey = 'userId';

  // setUserId(id: string) {
  //   this.userId = id;
  // }

  // getUserId(): string {
  //   return this.userId;
  // }

  setUserId(id: string) {
    this.userId = id;
    localStorage.setItem(this.userIdKey, this.userId);
  }

  getUserId(): string {
    if (!this.userId) {
      this.userId = localStorage.getItem(this.userIdKey) || '';
    }
    return this.userId;
  }
  
  clearUserId(): void {
    this.userId = '';
    localStorage.removeItem(this.userIdKey);
  
  }
   
}
