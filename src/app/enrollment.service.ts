import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  url = 'http://localhost:4300/enroll';
  constructor(private httpClient: HttpClient) {
  }

  enroll(user: User) {
    return this.httpClient.post<any>(this.url, user)
      .pipe(catchError(this.handleError))
  }
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
