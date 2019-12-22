import { NgModule } from '@angular/core';
import {MatFormFieldModule, MatSelectModule, MatCheckboxModule, MatRadioModule, MatIconModule} from '@angular/material';

const material =  [
MatFormFieldModule,
MatSelectModule,
MatCheckboxModule,
MatRadioModule,
MatIconModule

];

@NgModule({
  declarations: [],
  imports: [
    material
  ],
  exports : [
    material 
  ]
})
export class Material { }
