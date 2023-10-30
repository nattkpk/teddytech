import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/userModel/user.model'; // Import your User model

@Injectable()
export class ApiData {
  private apiUrl = 'http://localhost:4000'; // Replace with your API URL

  constructor(private http: HttpClient) {
  }

  // Fetch users from the API
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/teddyusers`);
  }

  // Get user by ID from the API
  getUserById(userId: string): Observable<User | null> {
    return this.http.get<User>(`${this.apiUrl}/teddyusers/${userId}`);
  }

  //แก้ไขข้อมูล สติกเกอร์ push pull
  updateStickers(userId: string, arrayName: string, action: string, arrayItem: any): Observable<any> {
    const url = `${this.apiUrl}/teddyusers/${userId}/${arrayName}`;
    return this.http.patch(url, { action, arrayItem });
  }

  //แก้ไขข้อมูล user
  updateUserFields(userId: string, updatedUserData: any): Observable<any> {
    const url = `${this.apiUrl}/teddyusers/${userId}`;
    return this.http.patch(url, updatedUserData);
  }

  registerUser(newUser: any): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/teddyusers/`,newUser);
  }
  
}
