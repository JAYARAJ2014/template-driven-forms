import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'tdf';
  userModel = new User('Jayaraj', 'jayaraj@gmail.com', 9198023898, 'Angular', 'morning', true);
  submitted = false;
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = false;
  errorMessage = '';
  constructor(private enrollmentService: EnrollmentService) {

  }
  validateTopic(value: string) {
    this.topicHasError = (value === 'default' || value === '')
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.userModel);
    this.enrollmentService.enroll(this.userModel)
      .subscribe(
        data => {
          console.log('Success!', data);
          this.userModel=new User('','',0,'','',false);
          this.submitted=false; 
        },
        error => {
          console.log('Error!', error);
          this.submitted=false; 
          this.errorMessage  = error.statusText; 

        }
      )
  }
}
