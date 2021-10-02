import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstcomponentComponent } from '../firstcomponent/firstcomponent.component';

const routes: Routes = [
  {path:'',redirectTo:'FirstModule',pathMatch:'full'},
  {path:'FirstModule',component:FirstcomponentComponent}  
];
  
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FirstmoduleModule {
  constructor(){
    console.log('First Module');
  }
 }
