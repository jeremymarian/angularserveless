import { Component, ViewChild } from '@angular/core';
import {
  MatTableDataSource,
  _MatTableDataSource,
} from '@angular/material/table';
import {
  DocumentData,
  Firestore,
  collection,
  onSnapshot,
  query,
  where,
} from '@angular/fire/firestore';
import { MatSort } from '@angular/material/sort';
import { VoltashareService } from 'src/app/services';

@Component({
  selector: 'app-activascontrol',
  templateUrl: './activascontrol.component.html',
  styleUrls: ['./activascontrol.component.scss'],
})
export class ActivascontrolComponent {
  dataSource = new MatTableDataSource<any>();
  showIt = true;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private db: Firestore,
    private v: VoltashareService
  ) {
    this.onInit();
  }
  async onInit() {
    const q = query(
      collection(this.db, 'baterias-6166'),
      where('Estado', '==', 'Activa bajo control')
    );
    const dell = onSnapshot(q, querySnapshot => {
      const flatter: DocumentData[] = querySnapshot.docs.flatMap(e => e.data());
      this.dataSource.data = flatter;
      this.dataSource.sort = this.sort;
      return (this.showIt = false);
    });
  }
  displayedColumns: string[] = ['Interno', 'Marca', 'Voltaje', 'Novedades'];
}
