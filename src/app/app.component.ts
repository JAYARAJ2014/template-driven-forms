import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styles: []
})
export class AppComponent {
  title = 'tdf';

  topics =['Angular', 'React', 'Vue'];
}
