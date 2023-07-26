import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PeriodicElement } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TaskloaderService {
  private dataLoader: BehaviorSubject<PeriodicElement[]> = new BehaviorSubject<
    PeriodicElement[]
  >([]);
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get getData() {
    const data = this.http
      .get('http://localhost:3000/users/istrue')
      .subscribe(info => {
        this.dataLoader.next(info as PeriodicElement[]);
        console.log(info)
      })
      

    return this.dataLoader.asObservable();
  } 

  set setData(data: PeriodicElement[]){
 this.http.put('http://localhost:3000/users/modify',data).subscribe((ele)=>{
  console.log(ele)
 })
  }
}
