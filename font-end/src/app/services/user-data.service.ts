import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private userId! : string;

  setUserId(id: string) {
    this.userId = id;
  }

  getUserId(): string {
    // return this.userId;
    return '653b74bd1bfb3cd8aa54f77c'
  }

}
