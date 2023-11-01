import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ProfileService {
  private showEditProfileSource = new Subject<boolean>();
  showEditProfile$ = this.showEditProfileSource.asObservable();

  updateShowEditProfile(value: boolean) {
    this.showEditProfileSource.next(value);
  }
}
