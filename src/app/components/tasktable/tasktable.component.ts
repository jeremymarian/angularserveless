import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ChekcsService, TaskloaderService } from '../../services'
import { PeriodicElement } from 'src/app/interfaces';
import { map, Observable } from 'rxjs';



@Component({
  selector: 'app-tasktable',
  templateUrl: './tasktable.component.html',
  styleUrls: ['./tasktable.component.scss'],
})
export class TasktableComponent {
  displayedColumns: string[] = ['position', 'name', 'category', 'check'];
  selectedItems: PeriodicElement[] = [];
  private dataSource = new MatTableDataSource<PeriodicElement>();


  constructor(private dt:TaskloaderService, private ch:ChekcsService){}
  dataSource$:Observable<MatTableDataSource<PeriodicElement>> =
  this.dt.getData.pipe(
    map(payload =>{
      const dataSource = this.dataSource
      dataSource.data = payload
      return dataSource
    })
  )
  ;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleCheck(element: PeriodicElement) {
  
    element.check = !element.check

    if(element.check){
      this.selectedItems.push(element)
      this.ch.setChecks = this.selectedItems  
    } else {
        const index = this.selectedItems.findIndex(
          v => v.position == element.position
        );
        this.selectedItems.splice(index, 1);
        this.ch.setChecks = this.selectedItems
        console.log(index);
      }
    

    
    
    console.log(this.selectedItems);
  }
}
