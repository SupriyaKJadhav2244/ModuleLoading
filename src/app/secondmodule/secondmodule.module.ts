import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SecondcomponentComponent } from '../secondcomponent/secondcomponent.component';

const routes: Routes = [
  {path:'',redirectTo:'SecondModule',pathMatch:'full'},
  {path:'SecondModule',component:SecondcomponentComponent}  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SecondmoduleModule {
  constructor(){
    console.log('Second Module');
  }
 }
