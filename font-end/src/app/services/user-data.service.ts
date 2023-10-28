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
    return '653d24ca484c7810cf1aa49a'
  }

}
