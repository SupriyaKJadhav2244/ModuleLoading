import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PreloadserviceService implements PreloadingStrategy{

  constructor() { }

  preload(route: Route, load: () => Observable<any>): Observable<any>{
    if (route.data && route.data['preload']) {
      if (route.data['delay']) {
        return timer(3000).pipe(mergeMap(() => load()));;
      }
      return load();
    } else {
      return of(null);
    }
  };
} 

