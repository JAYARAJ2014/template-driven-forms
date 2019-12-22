import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  url='';
  constructor(private httpClient : HttpClient) {
   }

   enroll(user: User) {
   return  this.httpClient.post<any>(this.url, user);
   }
}
