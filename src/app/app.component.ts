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

  topics = ['Angular', 'React', 'Vue'];
  topicHasError = false;

  constructor (private enrollmentService: EnrollmentService) {

  }
  validateTopic(value: string){
    this.topicHasError = (value === 'default' ||value === '') 
  }
  onSubmit() {
    console.log(this.userModel);
    this.enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!',data),
      error => console.log('Error!',error),
    )
    
    
  }
}
