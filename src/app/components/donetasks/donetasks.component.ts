import { Component, OnDestroy } from '@angular/core';
import {
  MatTableDataSource,
  _MatTableDataSource,
} from '@angular/material/table';
import { NewBat } from 'src/app/interfaces';
import { ChekcsService } from 'src/app/services';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-donetasks',
  templateUrl: './donetasks.component.html',
  styleUrls: ['./donetasks.component.scss'],
})
export class DonetasksComponent implements OnDestroy {
  private dataSource = new MatTableDataSource<NewBat>();
  selectedItems: NewBat[] = [];
  constructor(private ch: ChekcsService) {}
  thingsAsMatTableDataSource$: Observable<MatTableDataSource<NewBat>> =
    this.ch.getChecks.pipe(
      map(things => {
        const dataSource = this.dataSource;
        let selectedItems = this.selectedItems;
        dataSource.data = things;
        selectedItems.push(...things);
        return dataSource;
      })
    );
  displayedColumns: string[] = ['Interno', 'Marca'];
  ngOnDestroy(): void {
    this.ch.getChecks.subscribe().unsubscribe();
  }
}
