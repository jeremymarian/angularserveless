import { Component, ViewChild } from '@angular/core';
import {
  MatTableDataSource,
  _MatTableDataSource,
} from '@angular/material/table';
import {
  DocumentData,
  Firestore,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from '@angular/fire/firestore';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.component.html',
  styleUrls: ['./observaciones.component.scss'],
})
export class ObservacionesComponent {
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatSort) sort!: MatSort;
  constructor(private db: Firestore) {
    this.onInit();
  }
  async onInit() {
    const q = query(collection(this.db, 'observaciones'));
    const dell = onSnapshot(q, querySnapshot => {
      const flatter: DocumentData[] = querySnapshot.docs.flatMap(e => e.data());
      this.dataSource.data = flatter;
      this.dataSource.sort = this.sort;
    });
  }
  displayedColumns: string[] = ['observacion'];

  async eliminarRegistro(item: DocumentData) {
    const q = query(
      collection(this.db, 'observaciones'),
      where('observacion', '==', item['observacion'])
    );
    const querySnapshot = await getDocs(q);
    const ids = querySnapshot.docs[0].ref.id;
    const docRef = doc(this.db, 'observaciones', ids);
    await deleteDoc(docRef);
  }
}
