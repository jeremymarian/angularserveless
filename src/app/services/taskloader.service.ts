import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { PeriodicElement } from '../components/tasktable';

@Injectable({
  providedIn: 'root',
})
export class TaskloaderService {
  private dataLoader:BehaviorSubject<PeriodicElement[]> =
  new BehaviorSubject<PeriodicElement[]>([])

  get getData(){
    return this.dataLoader.asObservable()
  }

  set setData(data:PeriodicElement[]){
    this.dataLoader.next(data)
    console.log(this.dataLoader)
  }

  

   
  
  
}
