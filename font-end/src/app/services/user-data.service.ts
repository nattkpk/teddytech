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
    return '653dc1d95075548a7f6a797f'
  }

}
