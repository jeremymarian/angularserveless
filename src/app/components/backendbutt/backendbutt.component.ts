import { Component, Input } from '@angular/core';
import { PeriodicElement } from 'src/app/interfaces';
import { TaskloaderService } from 'src/app/services';

@Component({
  selector: 'app-backendbutt',
  templateUrl: './backendbutt.component.html',
  styleUrls: ['./backendbutt.component.scss']
})
export class BackendbuttComponent {
  @Input() selectedItems!:PeriodicElement[]


  constructor(private dt:TaskloaderService){
    this.onSubmit()
  }
  onSubmit(){
    this.dt.setData = this.selectedItems
    console.log(this.selectedItems)
  }
  


}
