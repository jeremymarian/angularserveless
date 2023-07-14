import { Component, OnDestroy } from '@angular/core';
import {
  MatTableDataSource,
  _MatTableDataSource,
} from '@angular/material/table';
import { PeriodicElement } from '../tasktable';
import { TaskloaderService } from 'src/app/services';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-donetasks',
  templateUrl: './donetasks.component.html',
  styleUrls: ['./donetasks.component.scss'],
})
export class DonetasksComponent implements OnDestroy {
  private dataSource = new MatTableDataSource<PeriodicElement>();

  constructor(private dt: TaskloaderService) {}

  thingsAsMatTableDataSource$: Observable<MatTableDataSource<PeriodicElement>> =
    this.dt.getData.pipe(
      map(things => {
        const dataSource = this.dataSource;
        dataSource.data = things;
        return dataSource;
      })
    );

  displayedColumns: string[] = ['position', 'name', 'category'];

  ngOnDestroy(): void {
    this.dt.getData.subscribe().unsubscribe()
  }
}
