import { Component, Input } from '@angular/core';
import { ChekcsService, TaskloaderService } from 'src/app/services';

@Component({
  selector: 'app-backendbutt',
  templateUrl: './backendbutt.component.html',
  styleUrls: ['./backendbutt.component.scss'],
})
export class BackendbuttComponent {
  @Input() selectedItems!: any[];
  load:Boolean = false
  constructor(
    private dt: TaskloaderService,
    private ck: ChekcsService
  ) {
    this.onSubmit;
  }
  onSubmit() {
    this.dt.setData(this.selectedItems);
    setTimeout(()=>{
      this.load = true
    })
  }

  deleteDocs() {
    this.dt.deleted(this.selectedItems);
  }

  cleanCheck() {
      this.load = true
      let cleanedChecks = this.selectedItems.map(e => {
        return (e.check = false as any);
      });
  
      this.ck.setChecks = cleanedChecks;
  
      this.ck.setChecks = [];
      
     
      document.location.reload();
    }
    
  
}
