import { Component, OnDestroy } from '@angular/core';
import {
  MatTableDataSource,
  _MatTableDataSource,
} from '@angular/material/table';
import { PeriodicElement } from 'src/app/interfaces';
import { ChekcsService } from 'src/app/services';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-donetasks',
  templateUrl: './donetasks.component.html',
  styleUrls: ['./donetasks.component.scss'],
})
export class DonetasksComponent implements OnDestroy {
  private dataSource = new MatTableDataSource<any>();
  selectedItems: any[] = [];
  constructor(
    private ch: ChekcsService
  ) {}

  thingsAsMatTableDataSource$: Observable<MatTableDataSource<PeriodicElement>> =
    this.ch.getChecks.pipe(
      map(things => {
        const dataSource = this.dataSource;
        let selectedItems = this.selectedItems;
        dataSource.data = things;
        selectedItems.push(...things)
        return dataSource })
    );

  displayedColumns: string[] = ['name', 'category'];

  ngOnDestroy(): void {
    this.ch.getChecks.subscribe().unsubscribe();
  }
}
