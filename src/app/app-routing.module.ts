import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { PreloadserviceService } from './preloadservice.service';

const routes: Routes = [
  {path:'Lazy',loadChildren:()=>import('src/app/lazymodule/lazymodule.module').then(m=>m.LazymoduleModule)},
  {path:'First',loadChildren:()=>import('src/app/firstmodule/firstmodule.module').then(m=>m.FirstmoduleModule)
    ,data: { preload: false }
  },
  {path:'Second',loadChildren:()=>import('src/app/secondmodule/secondmodule.module').then(m=>m.SecondmoduleModule)
    ,data: { preload: true,delay: true }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {preloadingStrategy:
      // NoPreloading
      // PreloadAllModules
      PreloadserviceService
    } 
    )],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
