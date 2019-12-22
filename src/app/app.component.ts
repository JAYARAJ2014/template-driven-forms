import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'tdf';
  userModel = new User('Rob', 'r@test.com', 9198023898, 'Angular', 'morning', true);

  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  validateTopic(value: string){
    this.topicHasError = (value === 'default' ||value === '') 
  }
}
