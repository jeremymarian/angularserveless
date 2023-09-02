import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewBat } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ChekcsService {
  private checkLoader: BehaviorSubject<NewBat[]> = new BehaviorSubject<
    NewBat[]
  >([]);
  constructor() {}

  get getChecks() {
    return this.checkLoader.asObservable();
  }

  set setChecks(data: NewBat[]) {
    this.checkLoader.next(data);
  }
}
