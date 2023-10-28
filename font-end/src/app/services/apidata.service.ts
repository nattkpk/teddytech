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
  getUserById(id: string): Observable<User | null> {
    return this.http.get<User>(`${this.apiUrl}/teddyusers/${id}`);
  }
  
}
