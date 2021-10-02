import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LazycomponentComponent } from '../lazycomponent/lazycomponent.component';

const routes: Routes = [
  {path:'',redirectTo:'SecondModule',pathMatch:'full'},
  {path:'SecondModule',component:LazycomponentComponent}  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazymoduleModule {
  constructor(){
    console.log('Lazy Module');
  }
 }
