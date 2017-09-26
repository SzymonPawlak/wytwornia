import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { Project1Component }  from './project1/project1.component'
import { Project2Component }  from './project2/project2.component'
import { Project3Component }  from './project3/project3.component'
import { SharedModule }       from "../../shared/shared.module"

//3th part library
import { GalleryModule } from 'ng-gallery';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GalleryModule    
  ],
  declarations: [
      Project1Component,
      Project2Component,
      Project3Component
    ]
})
export class ProjectModule { }
