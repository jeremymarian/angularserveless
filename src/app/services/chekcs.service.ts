import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PeriodicElement } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ChekcsService {
  private checkLoader: BehaviorSubject<PeriodicElement[]> =
    new BehaviorSubject<PeriodicElement[]>([]);
  constructor() {}

  get getChecks(){
    return this.checkLoader.asObservable()
  }

  set setChecks(data:PeriodicElement[]){
    this.checkLoader.next(data)
  }

}
