import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ChekcsService, TaskloaderService } from '../../services';
import { PeriodicElement } from 'src/app/interfaces';
import { map, Observable } from 'rxjs';
import {
  DocumentData,
  collection,
  onSnapshot,
  query,
  Firestore,
} from '@angular/fire/firestore';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-tasktable',
  templateUrl: './tasktable.component.html',
  styleUrls: ['./tasktable.component.scss'],
})
export class TasktableComponent {
  displayedColumns: string[] = ['name', 'category', 'check'];
  selectedItems: any[] = [];
  dataSource: MatTableDataSource<DocumentData> =
    new MatTableDataSource<DocumentData>();

  constructor(
    private dt: TaskloaderService,
    private ch: ChekcsService,
    private db: Firestore
  ) {
    this.onInit();
  }

  async onInit() {
    const q = query(collection(this.db, 'prueba'));
    const dell = onSnapshot(q, querySnapshot => {
      const flatter: DocumentData[] = querySnapshot.docs.flatMap(e => e.data());
      this.dataSource.data = flatter;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleCheck(element: PeriodicElement) {
    element.check = !element.check;

    if (element.check) {
      this.selectedItems.push(element);
      this.ch.setChecks = this.selectedItems;
    } else {
      const index = this.selectedItems.findIndex(
        v => v.position == element.position
      );
      this.selectedItems.splice(index, 1);
      this.ch.setChecks = this.selectedItems;
      console.log(index);
    }

    console.log(this.selectedItems);
  }
}
